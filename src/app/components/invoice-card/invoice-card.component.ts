import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-card',
  imports: [CommonModule],
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.scss',
})
export class InvoiceCardComponent {
  status: string = 'paid';
  statusContainerClasses() {
    if (this.status === 'paid') {
      return 'paid';
    } else if (this.status === 'pending') {
      return 'pending';
    } else {
      return 'draft';
    }
  }
}
