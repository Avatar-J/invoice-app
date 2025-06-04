import { Component, OnInit } from '@angular/core';
import { InvoiceToolbarComponent } from '../../components/invoice-toolbar/invoice-toolbar.component';
import { Invoice } from '../../../Model/invoice';
import { InvoiceCardComponent } from '../../components/invoice-card/invoice-card.component';
import { CommonModule } from '@angular/common';
import { InvoiceServiceService } from '../../services/invoice-service.service';

@Component({
  selector: 'app-invoice-list',
  imports: [InvoiceToolbarComponent, InvoiceCardComponent, CommonModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss',
})
export class InvoiceListComponent implements OnInit {
  invoices!: Invoice[];
  constructor(private InvoiceService: InvoiceServiceService) {}

  ngOnInit() {
    this.InvoiceService.get().subscribe((data) => {
      this.invoices = data;
    });
  }
}
