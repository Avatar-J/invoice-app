import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceToolbarComponent } from './invoice-toolbar.component';

describe('InvoiceToolbarComponent', () => {
  let component: InvoiceToolbarComponent;
  let fixture: ComponentFixture<InvoiceToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
