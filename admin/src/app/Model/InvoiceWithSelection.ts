import { Invoice } from "./Invoice";

export interface InvoiceWithSelection extends Invoice {
    selected?: boolean;  // Thêm thuộc tính `selected`
  }
  