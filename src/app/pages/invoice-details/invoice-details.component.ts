import { Component, OnInit } from '@angular/core';
import { InvoiceStatusComponent } from '../../components/invoice-status/invoice-status.component';
import { InvoiceDetailToolbarComponent } from '../../components/invoice-detail-toolbar/invoice-detail-toolbar.component';
import { InvoiceInfoComponent } from '../../components/invoice-info/invoice-info.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { InvoiceServiceService } from '../../services/invoice-service.service';
import { Invoice } from '../../../Model/invoice';

@Component({
  selector: 'app-invoice-details',
  imports: [
    InvoiceStatusComponent,
    InvoiceDetailToolbarComponent,
    InvoiceInfoComponent,
    RouterModule,
  ],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss',
})
export class InvoiceDetailsComponent implements OnInit {
  invoice!: Invoice;
  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceServiceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.invoiceService.getById(id).subscribe((data) => {
        if (data) {
          this.invoice = data;
        } else {
          throw new Error('Invoice not found');
        }
      });
    }
  }
}
