import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvoiceServiceService } from '../../services/invoice-service.service';

@Component({
  selector: 'app-delete',
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
})
export class DeleteComponent implements OnInit {
  @Output()
  closeModal = new EventEmitter<void>();

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private invoiceService = inject(InvoiceServiceService);

  invoiceId: string | null = null;

  ngOnInit(): void {
    this.invoiceId = this.route.snapshot.paramMap.get('id');
  }

  onCancel() {
    console.log(this.invoiceId);
    // if (this.invoiceId) {
    //   this.router.navigate(['/invoices', this.invoiceId]);
    // } else {
    //   this.router.navigate(['']);
    // }
    console.log('event emitted to close modal');
    this.closeModal.emit();
  }

  onConfirmDelete() {
    if (this.invoiceId) {
      this.invoiceService.delete(this.invoiceId);
      this.router.navigate(['']);
    } else {
      console.error('No invoice ID found for deletion');
    }
  }
}
