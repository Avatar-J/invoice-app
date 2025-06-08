import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-new-invoice-form',
  imports: [CommonModule, FormComponent],
  templateUrl: './new-invoice-form.component.html',
  styleUrl: './new-invoice-form.component.scss',
})
export class NewInvoiceFormComponent {}
