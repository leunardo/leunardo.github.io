import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bills-menu',
  templateUrl: './bills-menu.component.html',
  styleUrls: ['./bills-menu.component.scss']
})
export class BillsMenuComponent implements OnInit {
  constructor(public bottomSheetRef: MatBottomSheetRef) { }
  ngOnInit(): void {
  }
}
