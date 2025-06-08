import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailToolbarComponent } from './invoice-detail-toolbar.component';

describe('InvoiceDetailToolbarComponent', () => {
  let component: InvoiceDetailToolbarComponent;
  let fixture: ComponentFixture<InvoiceDetailToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceDetailToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceDetailToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
