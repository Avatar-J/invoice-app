import { Component } from '@angular/core';
import { InvoiceDetailsToolbarComponent } from '../../components/invoice-details-toolbar/invoice-details-toolbar.component';

@Component({
  selector: 'app-invoice-details',
  imports: [InvoiceDetailsToolbarComponent],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss',
})
export class InvoiceDetailsComponent {}
