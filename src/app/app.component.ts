import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewInvoiceFormComponent } from './pages/new-invoice-form/new-invoice-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NewInvoiceFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'invoice-app';
  showNewInvoice: boolean = true;

  constructor(private router: Router) {
    // this.router.events.subscribe(() => {
    //   this.showNewInvoice = this.router.url === '/invoices/new';
    // });
  }

  get isNewModalOpen(): boolean {
    return this.router.url.endsWith('/invoices/new');
  }
}
