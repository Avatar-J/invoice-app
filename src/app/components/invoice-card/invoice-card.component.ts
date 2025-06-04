import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Invoice } from '../../../Model/invoice';

@Component({
  selector: 'app-invoice-card',
  imports: [CommonModule],
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.scss',
})
export class InvoiceCardComponent {
  @Input({
    required: true,
  })
  invoice!: Invoice;

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
