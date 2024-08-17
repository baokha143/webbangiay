import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseUrl = 'http://localhost:8080/api/invoices'; // Đảm bảo URL đúng

  constructor(private http: HttpClient) {}

  // Lấy tất cả đơn hàng
  getAllInvoices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Xóa tất cả đơn hàng
  deleteAllInvoices(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteAll`);
  }

  // Xóa đơn hàng theo maHD
  deleteInvoice(maHD: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${maHD}`);
  }
}
