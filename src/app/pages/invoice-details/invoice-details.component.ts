import { Component, OnInit, inject } from '@angular/core';
import { InvoiceStatusComponent } from '../../components/invoice-status/invoice-status.component';
import { InvoiceDetailToolbarComponent } from '../../components/invoice-detail-toolbar/invoice-detail-toolbar.component';
import { InvoiceInfoComponent } from '../../components/invoice-info/invoice-info.component';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { InvoiceServiceService } from '../../services/invoice-service.service';
import { Invoice } from '../../../Model/invoice';
import { DeleteComponent } from '../../components/delete/delete.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-details',
  imports: [
    InvoiceStatusComponent,
    InvoiceInfoComponent,
    RouterModule,
    DeleteComponent,
    CommonModule,
  ],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss',
})
export class InvoiceDetailsComponent implements OnInit {
  invoice!: Invoice;
  showDeleteModal: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceServiceService
  ) {}
  router = inject(Router);

  onEditInvoice() {
    console.log('edit invoice');
    this.router.navigate([{ outlets: { modal: ['edit'] } }], {
      relativeTo: this.route,
    });
  }
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
  onDelete() {
    this.showDeleteModal = true;
  }
  changeModalState() {
    this.showDeleteModal = !this.showDeleteModal;
    console.log('change modal state', this.showDeleteModal);
  }
  onMarkAsPaid() {
    console.log('mark as paid');
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      if (
        this.invoice.status === 'draft' ||
        this.invoice.status === 'pending'
      ) {
        this.invoiceService.getById(id).subscribe((data) => {
          if (data) {
            const updatedInvoice = { ...data, status: 'paid' as 'paid' };
            this.invoice = updatedInvoice;
            this.invoiceService.update(updatedInvoice);
          }
        });
      }
    }
  }
}
