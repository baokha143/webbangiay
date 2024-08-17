import { account } from "./account.model";
import { ProductSize } from "./product-size.model";

export interface Invoice {
  id?: number;
  account: { id: number }; // Sử dụng object để đại diện cho tài khoản
  cartItems: any[]; // Thay đổi kiểu dữ liệu tùy theo yêu cầu của bạn
  total: number;
  status: string; // Trạng thái hóa đơn
}

export enum InvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED'
}

export interface CartItem {
  productId: number;
  quantity: number;
  price: number;
}
