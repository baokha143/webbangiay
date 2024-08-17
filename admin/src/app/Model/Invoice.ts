import { Account } from "./Account";
import { ProductSize } from "./ProductSize";

export interface Invoice {
  maHD: number;                  // ID của hóa đơn
  productSize: ProductSize;      // Liên kết đến ProductSize
  account: Account;              // Liên kết đến Account
  tongGia: number;               // Tổng giá
  ngayXuat: string;             // Ngày xuất hóa đơn, định dạng ISO string
  updatedAt: string;             // Ngày cập nhật, định dạng ISO string
  status: InvoiceStatus;         // Trạng thái hóa đơn

}
export enum InvoiceStatus {
  PENDING = 'PENDING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}
