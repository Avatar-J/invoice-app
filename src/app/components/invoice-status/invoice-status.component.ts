import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-status',
  imports: [CommonModule],
  templateUrl: './invoice-status.component.html',
  styleUrl: './invoice-status.component.scss',
})
export class InvoiceStatusComponent {
  @Input({
    required: true,
  })
  invoiceStatus!: string;

  statusContainerClasses(status: string) {
    if (status === 'paid') {
      return 'paid';
    } else if (status === 'pending') {
      return 'pending';
    } else {
      return 'draft';
    }
  }
}
