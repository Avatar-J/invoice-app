import { Component, OnInit, inject } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { InvoiceServiceService } from '../../services/invoice-service.service';
import { Router } from '@angular/router';
import { Invoice, InvoiceItem } from '../../../Model/invoice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-invoice-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-invoice-form.component.html',
  styleUrl: './edit-invoice-form.component.scss',
})
export class EditInvoiceFormComponent implements OnInit {
  invoiceFormData!: FormGroup;

  formBuilder = inject(FormBuilder);
  InvoiceService = inject(InvoiceServiceService);
  router = inject(Router);

  ngOnInit(): void {
    this.invoiceFormData = this.formBuilder.group({
      senderAddress: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      clientAddress: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      clientName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      invoiceDate: ['', Validators.required],
      paymentTerms: ['', Validators.required],
      projectDescription: ['', Validators.required],
      items: this.formBuilder.array([this.createItem()]),
    });
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  get items(): FormArray {
    return this.invoiceFormData.get('items') as FormArray;
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  generateInvoiceId(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const prefix =
      letters.charAt(Math.floor(Math.random() * 26)) +
      letters.charAt(Math.floor(Math.random() * 26));
    const number = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${number}`;
  }

  formatDate(date: string | Date): string {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  calculatePaymentDue(
    invoiceDate: string | Date,
    paymentTerms: number
  ): string {
    const baseDate = new Date(invoiceDate);
    baseDate.setDate(baseDate.getDate() + paymentTerms);
    return this.formatDate(baseDate);
  }

  createInvoiceObj() {
    const formData = this.invoiceFormData.value;
    const invoiceData: Invoice = {
      id: this.generateInvoiceId(),
      createdAt: this.formatDate(formData.invoiceDate),
      paymentDue: this.calculatePaymentDue(
        formData.invoiceDate,
        formData.paymentTerms
      ),
      description: formData.projectDescription,
      paymentTerms: formData.paymentTerms,
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      status: 'pending',
      senderAddress: formData.senderAddress,
      clientAddress: formData.clientAddress,
      items: formData.items.map((item: InvoiceItem) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.quantity * item.price,
      })),
      total: formData.items.reduce(
        (sum: number, item: InvoiceItem) => sum + item.quantity * item.price,
        0
      ),
    };

    return invoiceData;
  }

  navigate() {
    // this.router.navigate(['/invoices', invoice.id, 'edit']);
  }

  onDiscard(): void {
    this.invoiceFormData.reset();
  }

  onSubmit() {
    if (this.invoiceFormData.valid) {
      const invoiceObj = this.createInvoiceObj();
      this.InvoiceService.add(invoiceObj);
    }
  }
}
