import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-detail-toolbar',
  imports: [],
  templateUrl: './invoice-detail-toolbar.component.html',
  styleUrl: './invoice-detail-toolbar.component.scss',
})
export class InvoiceDetailToolbarComponent {
  @Input() invoiceID!: string;

  router = inject(Router);
  onEditInvoice() {
    this.router.navigate(['/invoices', this.invoiceID, 'edit']);
  }
}
