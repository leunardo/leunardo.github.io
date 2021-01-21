import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReportMonth } from './shared/interfaces/report-month.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finance';

}
