import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  @Input({ required: true })
  discard!: string;

  @Input({ required: true })
  draft!: boolean;

  @Input({ required: true })
  save!: string;

  invoiceFormData!: FormGroup;

  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.invoiceFormData = this.formBuilder.group({
      billFrom: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      billTo: this.formBuilder.group({
        clientName: ['', Validators.required],
        clientEmail: ['', [Validators.required, Validators.email]],
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
        invoiceDate: ['', Validators.required],
        paymentTerms: ['', Validators.required],
        projectDescription: ['', Validators.required],
      }),
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

  onDiscard(): void {
    this.invoiceFormData.reset();
  }

  onSaveDraft(): void {
    if (this.invoiceFormData.valid) {
      const draftData = this.invoiceFormData.value;
      console.log('Draft data', draftData);
    }
  }

  onSubmit() {
    if (this.invoiceFormData.valid) {
      console.log('Full form data', this.invoiceFormData.value);
    }
  }
}
