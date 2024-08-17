import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  constructor(private http: HttpClient) {}

  createPaymentLink() {
    const order = {
      amount: 10000,
      description: 'Thanh toan giay',
      orderCode: 10,
      returnUrl: `http://localhost:4200/success.html`, 
      cancelUrl: `http://localhost:4200/cancel.html`
    };

    this.http.post('/create-payment-link', order)
      .subscribe((response: any) => {
        window.location.href = response.checkoutUrl; // Chuyển hướng đến URL thanh toán
      });
  }
}
