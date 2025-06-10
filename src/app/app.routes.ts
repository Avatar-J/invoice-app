import { Routes } from '@angular/router';
import { InvoiceDetailsComponent } from './pages/invoice-details/invoice-details.component';
import { InvoiceListComponent } from './pages/invoice-list/invoice-list.component';
import { NewInvoiceFormComponent } from './pages/new-invoice-form/new-invoice-form.component';
import { EditInvoiceFormComponent } from './pages/edit-invoice-form/edit-invoice-form.component';

export const routes: Routes = [
  // {
  //   path: 'invoices',
  //   component: InvoiceListComponent,
  //   children: [
  //     {
  //       path: 'new',
  //       component: NewInvoiceFormComponent,
  //       outlet: 'modal',
  //     },
  //     {
  //       path: ':id',
  //       component: InvoiceDetailsComponent,
  //       children: [
  //         {
  //           path: 'edit',
  //           component: EditInvoiceFormComponent,
  //           outlet: 'modal',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   redirectTo: 'invoices',
  //   pathMatch: 'full',
  // },

  {
    path: '',
    component: InvoiceListComponent,
    children: [
      {
        path: 'new',
        component: NewInvoiceFormComponent,
        outlet: 'modal',
      },
    ],
  },
  {
    path: 'invoices/:id',
    component: InvoiceDetailsComponent,
    children: [
      {
        path: 'invoices/:id/edit',
        component: EditInvoiceFormComponent,
        outlet: 'modal',
      },
    ],
  },
  {
    path: 'invoices',
    redirectTo: '',
    pathMatch: 'full',
  },
];
