import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, InvoicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'invoice-app';
}
