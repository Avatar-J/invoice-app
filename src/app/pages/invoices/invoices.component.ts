import { Component } from '@angular/core';
import { InvoiceToolbarComponent } from '../../components/invoice-toolbar/invoice-toolbar.component';

@Component({
  selector: 'app-invoices',
  imports: [InvoiceToolbarComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
})
export class InvoicesComponent {}
