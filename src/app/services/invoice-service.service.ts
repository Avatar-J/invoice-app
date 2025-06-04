import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Invoice } from '../../Model/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceServiceService {
  private invoicesSubject = new BehaviorSubject<Invoice[]>([]);
  public invoices$ = this.invoicesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialInvoiceData();
  }

  private loadInitialInvoiceData(): void {
    this.http.get<Invoice[]>('assets/data.json').subscribe((data) => {
      this.invoicesSubject.next(data);
    });
  }
  get(): Observable<Invoice[]> {
    return this.invoices$;
  }
}
