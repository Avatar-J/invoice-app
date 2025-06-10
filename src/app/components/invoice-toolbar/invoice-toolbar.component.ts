import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-toolbar',
  imports: [RouterModule],
  templateUrl: './invoice-toolbar.component.html',
  styleUrl: './invoice-toolbar.component.scss',
})
export class InvoiceToolbarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  onCreateNewInvoice() {
    console.log('create new invoice');
    // this.router.navigate(['/invoices/new']);
    this.router.navigate([{ outlets: { modal: ['new'] } }], {
      relativeTo: this.route,
    });
  }
}
