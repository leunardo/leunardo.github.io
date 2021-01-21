import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(bills: { value: number }[]): number {
    let sum = 0;
    for (const bill of bills) {
        sum += bill.value;
    }
    return sum;
  }

}
