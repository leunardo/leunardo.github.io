import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumPipe } from './pipes/sum.pipe';



@NgModule({
  declarations: [SumPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SumPipe
  ]
})
export class SharedModule { }
