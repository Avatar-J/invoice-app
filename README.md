# Invoice App

## Project Description

Invoice-app is a simple Angular application for managing invoices. Users can view a list of invoices, see invoice details, create new invoices, edit existing ones, and mark invoices as paid.

---

## Setup & Run Instructions

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Avatar-J/invoice-app.git
   cd invoice-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   ng serve
   ```
   The app will be available at [http://localhost:4200](http://localhost:4200).

---

## Application Features

- **Invoice List:** View all invoices with summary information.
- **Invoice Details:** View detailed information for a selected invoice.
- **Create Invoice:** Fill out a form to add a new invoice.
- **Edit Invoice:** Update details of an existing invoice.
- **Delete Invoice:** Remove an invoice from the list.
- **Mark as Paid:** Change invoice status to "Paid".
- **Modal Support:** Create and edit forms open in modal outlets.

---

## Component Structure

- **AppComponent:** Root component.
- **InvoiceListComponent:** Displays the list of invoices.
- **InvoiceCardComponent:** Card view for each invoice in the list.
- **InvoiceDetailsComponent:** Shows details for a selected invoice.
- **InvoiceStatusComponent:** Displays the status of an invoice.
- **InvoiceInfoComponent:** Shows invoice information in detail view.
- **FormComponent:** Handles both new and edit invoice forms.
- **DeleteComponent:** Modal for confirming invoice deletion.
- **InvoiceDetailToolbarComponent:** Toolbar for actions in the detail view.

---

## Routing Overview

The app uses Angular Router with the following main routes:

| Path                 | Component                | Description                |
| -------------------- | ------------------------ | -------------------------- |
| `/invoices`          | InvoiceListComponent     | Shows all invoices         |
| `/invoices/:id`      | InvoiceDetailsComponent  | Shows invoice details      |
| `/invoices/new`      | NewInvoiceFormComponent  | Create new invoice (modal) |
| `/invoices/:id/edit` | EditInvoiceFormComponent | Edit invoice (modal)       |
| `/`                  | Redirects to `/invoices` |                            |

Modal routes use named outlets for forms and deletion confirmation.

---

## Form Implementation

- **Reactive Forms:** The app uses Angular Reactive Forms for invoice creation and editing.
- **FormArray:** Items in an invoice are managed using a `FormArray` for dynamic add/remove.
- **Validation:** Required fields and numeric validation are enforced.
- **Live Calculation:** Item totals are calculated in real-time as users enter quantity and price.

---

## Git Workflow

1. **Created a new branch for each feature or bugfix:**

   ```sh
   git checkout -b feature/feature-name
   ```

2. **Committed changes with clear messages:**

   ```sh
   git add .
   git commit -m "Add feature: description"
   ```

3. **Push your branch:**

   ```sh
   git push origin feature/feature-name
   ```

4. **Open a Pull Request** on GitHub for code review and merging.

5. **Keep branch up to date:**
   ```sh
   git fetch origin
   git rebase origin/main
   ```

---
