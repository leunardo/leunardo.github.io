import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsMenuComponent } from './bills-menu.component';

describe('BillsMenuComponent', () => {
  let component: BillsMenuComponent;
  let fixture: ComponentFixture<BillsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
