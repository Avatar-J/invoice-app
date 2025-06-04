import { Component, OnInit } from '@angular/core';
import { InvoiceToolbarComponent } from '../../components/invoice-toolbar/invoice-toolbar.component';
import { Invoice } from '../../../Model/invoice';
import { InvoiceCardComponent } from '../../components/invoice-card/invoice-card.component';
import { CommonModule } from '@angular/common';
import { InvoiceServiceService } from '../../services/invoice-service.service';

@Component({
  selector: 'app-invoices',
  imports: [InvoiceToolbarComponent, InvoiceCardComponent, CommonModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
})
export class InvoicesComponent implements OnInit {
  invoices!: Invoice[];
  constructor(private InvoiceService: InvoiceServiceService) {}

  ngOnInit() {
    this.InvoiceService.get().subscribe((data) => {
      this.invoices = data;
    });

    console.log(this.invoices);
  }
}
