import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const CUSTOM_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMAT }
  ]
})
export class ReceiptFormComponent implements OnInit {

  monthly = false;

  iconsAvailable = [
    'payments',
    'school',
    'shopping_cart',
    'store',
    'local_taxi',
    'local_pharmacy',
    'casino',
    'emoji_objects'
  ];

  form = this.fb.group({
    value: [this.data.value],
    description: [this.data.description],
    icon: [this.data.icon],
    id: [this.data.id],
    monthly: [Boolean(this.data.until)],
    ...(() => {
      const result: any = {};
      if (Boolean(this.data.until)) {
        result.until = [this.data.until.toDate()];
        result.from = [this.data.from.toDate()];
      }
      return result;
    })()
  });


  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ReceiptFormComponent>,
  ) { }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  ngOnInit(): void {
    if (this.data.from) {
      this.monthly = true;
    }
  }

}
