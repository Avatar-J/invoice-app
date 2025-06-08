import { Routes } from '@angular/router';
import { InvoiceDetailsComponent } from './pages/invoice-details/invoice-details.component';
import { InvoiceListComponent } from './pages/invoice-list/invoice-list.component';
import { NewInvoiceFormComponent } from './pages/new-invoice-form/new-invoice-form.component';
export const routes: Routes = [
  {
    path: '',
    component: InvoiceListComponent,
  },
  {
    path: 'invoices/:id',
    component: InvoiceDetailsComponent,
  },
  {
    path: 'invoices/new',
    component: NewInvoiceFormComponent,
  },
];
