import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AutoCompleteService {
  constructor(private firestore: AngularFirestore) { }

  get(): Observable<string[]> {

    const cache =  localStorage.getItem('autocomplete');
    let validUntil: string | Date | null = localStorage.getItem('autocompleteValidUntil');
    validUntil = validUntil ? new Date(validUntil) : null;

    if (cache && validUntil &&  validUntil >= new Date()) {
      return of(JSON.parse(cache));
    }

    return this.firestore.collectionGroup('bills').get({ source: 'server' }).pipe(
      map(collection => collection.docs.map(d => d.data()).map((data: any) => data.description)),
      map(autocomplete => [...new Set(autocomplete)].sort()),
      tap(autocomplete => {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);

        localStorage.setItem('autocomplete', JSON.stringify(autocomplete));
        localStorage.setItem('autocompleteValidUntil', date.toISOString());
      })
    );
  }
}
