import { Component, OnInit, inject } from '@angular/core';
import { InvoiceToolbarComponent } from '../../components/invoice-toolbar/invoice-toolbar.component';
import { Invoice } from '../../../Model/invoice';
import { InvoiceCardComponent } from '../../components/invoice-card/invoice-card.component';
import { CommonModule } from '@angular/common';
import { InvoiceServiceService } from '../../services/invoice-service.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  imports: [InvoiceCardComponent, CommonModule, RouterModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss',
})
export class InvoiceListComponent implements OnInit {
  router = inject(Router);
  invoices!: Invoice[];
  totalInvoices: number = 0;
  isDropdownOpen: boolean = false;

  constructor(
    private InvoiceService: InvoiceServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.InvoiceService.get().subscribe((data) => {
      this.invoices = data;
      this.totalInvoices = this.invoices.length;
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  filter(status: string) {
    this.InvoiceService.get().subscribe((data) => {
      this.invoices = data.filter((invoice) => invoice.status === status);
    });
    this.isDropdownOpen = false;
  }
  onViewInvoice(invoiceID: string) {
    this.router.navigate(['/invoices', invoiceID]);
  }

  onCreateNewInvoice() {
    console.log('create new invoice');
    this.router.navigate([{ outlets: { modal: ['new'] } }], {
      relativeTo: this.route,
    });
  }
}
