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

  getById(id: string): Observable<Invoice | undefined> {
    return this.invoices$.pipe(
      map((invoices) => invoices.find((invoice) => invoice.id === id))
    );
  }

  add(newInvoice: Invoice) {
    const currentInvoices = this.invoicesSubject.getValue();
    const updatedInvoices = [...currentInvoices, newInvoice];
    this.invoicesSubject.next(updatedInvoices);
  }
  delete(id: string): void {
    const currentInvoices = this.invoicesSubject.getValue();
    const updatedInvoices = currentInvoices.filter(
      (invoice) => invoice.id !== id
    );
    this.invoicesSubject.next(updatedInvoices);
  }
  update(updatedInvoice: Invoice): void {
    const currentInvoices = this.invoicesSubject.getValue();
    const updatedInvoices = currentInvoices.map((invoice) =>
      invoice.id === updatedInvoice.id ? updatedInvoice : invoice
    );
    this.invoicesSubject.next(updatedInvoices);
  }
}
