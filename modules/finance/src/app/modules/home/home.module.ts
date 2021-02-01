import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReceiptFormComponent } from './components/receipt-form/receipt-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';

import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { EditRevenueComponent } from './components/edit-revenue/edit-revenue.component';
import { MonthYearPickerComponent } from './components/month-year-picker/month-year-picker.component';
import { BillsMenuComponent } from './components/bills-menu/bills-menu.component';

@NgModule({
  declarations: [HomeComponent, ReceiptFormComponent, DeleteConfirmationComponent, EditRevenueComponent, MonthYearPickerComponent, BillsMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatRippleModule
  ]
})
export class HomeModule { }
