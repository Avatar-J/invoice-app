import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Invoice } from '../../../Model/invoice';
import { RouterModule } from '@angular/router';
import { InvoiceStatusComponent } from '../invoice-status/invoice-status.component';

@Component({
  selector: 'app-invoice-card',
  imports: [CommonModule, RouterModule, InvoiceStatusComponent],
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.scss',
})
export class InvoiceCardComponent {
  @Input({
    required: true,
  })
  invoice!: Invoice;
}
