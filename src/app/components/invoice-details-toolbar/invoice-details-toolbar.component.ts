import { Component } from '@angular/core';
import { InvoiceStatusComponent } from '../invoice-status/invoice-status.component';

@Component({
  selector: 'app-invoice-details-toolbar',
  imports: [InvoiceStatusComponent],
  templateUrl: './invoice-details-toolbar.component.html',
  styleUrl: './invoice-details-toolbar.component.scss',
})
export class InvoiceDetailsToolbarComponent {}
