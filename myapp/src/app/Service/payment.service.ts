import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:4200/create-payment-link'; // URL API của bạn

  constructor(private http: HttpClient) {}

  createPaymentLink(): Observable<{ checkoutUrl: string }> {
    return this.http.post<{ checkoutUrl: string }>(this.apiUrl, {
      // Tham số cần thiết cho yêu cầu tạo liên kết thanh toán
      amount: 10000,
      description: 'Thanh toan giay',
      orderCode: 10,
      returnUrl: 'http://localhost:4200/success.html',
      cancelUrl: 'http://localhost:4200/cancel.html'
    });
  }
}
