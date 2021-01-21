import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReportMonth } from './shared/interfaces/report-month.interface';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finance';

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      if (confirm('Uma nova versão está disponível. Deseja instalar?')) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    })
  }
}
