import { Component, Input } from '@angular/core';
import { Invoice } from '../../../Model/invoice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-info',
  imports: [CommonModule],
  templateUrl: './invoice-info.component.html',
  styleUrl: './invoice-info.component.scss',
})
export class InvoiceInfoComponent {
  @Input({
    required: true,
  })
  invoice!: Invoice;
}
