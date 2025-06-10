import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewInvoiceFormComponent } from './pages/new-invoice-form/new-invoice-form.component';
import { Router } from '@angular/router';
import { EditInvoiceFormComponent } from './pages/edit-invoice-form/edit-invoice-form.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    NewInvoiceFormComponent,
    EditInvoiceFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'invoice-app';
  showNewInvoice: boolean = false;
  showEditInvoice: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showNewInvoice = this.router.url === '/invoices/new';
      this.showEditInvoice = this.router.url === '/invoices/:id/edit';
    });
  }
}
