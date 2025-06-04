import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsToolbarComponent } from './invoice-details-toolbar.component';

describe('InvoiceDetailsToolbarComponent', () => {
  let component: InvoiceDetailsToolbarComponent;
  let fixture: ComponentFixture<InvoiceDetailsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceDetailsToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceDetailsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
