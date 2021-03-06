import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { isMoment, Moment } from 'moment';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BillsMenuComponent } from '../../components/bills-menu/bills-menu.component';
import { DeleteConfirmationComponent } from '../../components/delete-confirmation/delete-confirmation.component';
import { EditRevenueComponent } from '../../components/edit-revenue/edit-revenue.component';
import { ReceiptFormComponent } from '../../components/receipt-form/receipt-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reportsDoc = this.firestore.collection('finance').doc('report');
  monthlyDoc = this.firestore.collection(`finance/monthly/items`);

  data$: Observable<any[]>;
  revenue$: BehaviorSubject<number> = new BehaviorSubject(0);
  storage = localStorage;
  month$: BehaviorSubject<{ date: Date, representation: string, year: string, month: string }>;
  isDesktop = false;

  private currentDate;

  constructor(
    private firestore: AngularFirestore,
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) {
    this.currentDate = new Date();
    // load report relative to next month
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);

    this.month$ = new BehaviorSubject({
      date: this.currentDate,
      representation: this.formatDate(this.currentDate),
      month: (this.currentDate.getMonth() + 1).toString().padStart(2, '0'),
      year: this.currentDate.getFullYear().toString()
    });
    this.data$ = this.loadData(this.currentDate);
  }

  ngOnInit(): void {
    this.isDesktop = window.screen.availWidth >= 600;
  }

  changeDate(momentDate: Moment | null): void {
    let nextDate;

    if (isMoment(momentDate)) {
      nextDate = momentDate.toDate();
    } else {
      nextDate = new Date();
      nextDate.setMonth(nextDate.getMonth() + 1);
    }

    console.log('Loading data for...', nextDate);
    this.data$ = this.loadData(nextDate);
    this.data$.subscribe(x => console.log(x));
  }

  addNewReport(): void {
    const date = this.month$.value.date;
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    this.reportsDoc.collection(`${year}/${month}/bills`).add({
      description: 'Edite aqui',
      value: 0,
      icon: 'payments'
    }).then(() => {
      this.reportsDoc.collection(`${year}`).doc(`${month}`).set({ revenue: 0 });
    });
  }

  editBill(bill: any): void {
    const dialog = this.dialog.open(ReceiptFormComponent, {
      data: bill
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.saveBill(result);
      }
    });
  }

  openBottomSheet(bill: any): void {
    const bottomSheetRef = this.bottomSheet.open(BillsMenuComponent);

    bottomSheetRef.afterDismissed().subscribe(result => {
      if (result === 'edit') {
        this.editBill(bill);
      } else if (result === 'delete') {
        this.deleteBill(bill);
      }
    });
  }

  onSwipeLeft(event: any): void {
    const month = moment(this.month$.value.date).add(1, 'month');
    this.changeDate(month);
  }

  onSwipeRight(event: any): void {
    const month = moment(this.month$.value.date).add(-1, 'month');
    this.changeDate(month);
  }

  deleteBill(bill: any): void {
    const dialog = this.dialog.open(DeleteConfirmationComponent, {
      data: bill
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        if (result.until) {
          this.monthlyDoc.doc(result.id).delete();
        } else {
          const {month, year} = this.month$.value;
          this.reportsDoc.collection(`${year}/${month}/bills`).doc(result.id).delete();
        }
      }
    });
  }

  addBill(monthly = false): void {
    const bill: any = {
      description: undefined,
      value: undefined,
      icon: undefined
    };

    if (monthly) {
      bill.until = { toDate(): undefined { return undefined; } };
      bill.from = { toDate(): Date {
        const now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        return now;
      } };
    }

    this.editBill(bill);
  }

  editRevenue(): void {
    const dialogRef = this.dialog.open(EditRevenueComponent, {
      data: this.revenue$.value
    });

    dialogRef.afterClosed().subscribe(result => {
      if (Number.isFinite(result)) {
        const {month, year} = this.month$.value;
        this.reportsDoc.collection(`${year}`).doc(`${month}`).set({ revenue: result });
      }
    });
  }

  toggleVisibility(key: string): void {
    window.localStorage.setItem(
      key,
      Boolean(parseInt(localStorage.getItem(key) as string,  10)) ? '0' : '1'
    );
  }

  private loadData(date: Date): Observable<any> {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    return combineLatest([
      this.reportsDoc.collection(`${year}/${month}/bills`).snapshotChanges(),
      this.reportsDoc.collection(`${year}`).doc(`${month}`).snapshotChanges(),
      this.monthlyDoc.snapshotChanges()
    ]).pipe(
        tap(([bills, monthDoc, monthlyies]) => {
          this.revenue$.next(monthDoc?.payload.data()?.revenue);
          this.month$.next({
            date,
            month,
            year,
            representation: this.formatDate(date)
          });
        }),
        map(([bills, monthlyDoc,  monthlyies]) => {
          if (!bills.length) {
            return null;
          }

          console.log(monthlyies, 'new');
          const data = bills.map(bill => ({ ...bill.payload.doc.data(), id: bill.payload.doc.id }));
          const monthlyBillsData = monthlyies.map(m => ({ ...m.payload.doc.data() as object, id: m.payload.doc.id }));
          const filteredMonthly = this.filterMonthlyItems(monthlyBillsData, date);

          data.push(...filteredMonthly);
          return data;
        })
      );
  }


  private filterMonthlyItems(monthly: any[], date: Date): any {
    const result: any = [];
    for (const month of monthly) {
      if (month.until.toDate() > date && month.from.toDate() < date) {
        result.push(month);
      }
    }

    return result;
  }

  private formatDate(date: Date): string {
    return `${date.toLocaleString('pt-BR', { month: 'long' }).toUpperCase()} - ${date.getFullYear()}`;
  }

  private saveBill(bill: any): void {
    const {month, year} = this.month$.value;

    if (isMoment(bill.until)) {
      bill.until = bill.until.toDate();
    }

    if (isMoment(bill.from)) {
      bill.from = bill.from.toDate();
    }

    if (bill.id) {
      if (bill.monthly) {
        this.monthlyDoc.doc(bill.id).update(bill);
      } else {
        this.reportsDoc.collection(`${year}/${month}/bills`).doc(bill.id).update(bill);
      }
    } else {
      if (bill.monthly) {
        this.monthlyDoc.add(bill);
      } else {
        this.reportsDoc.collection(`${year}/${month}/bills`).add(bill);
      }
    }
  }


}
