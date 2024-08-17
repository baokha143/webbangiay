import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vnpay-return',
  templateUrl: './vnpay-return.component.html',
})
export class VnpayReturnComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const vnpResponseCode = params['vnp_ResponseCode'];
      const vnpSecureHash = params['vnp_SecureHash'];

      // Call your backend to validate the response
      // Example: this.paymentService.validatePayment(vnpResponseCode, vnpSecureHash);
    });
  }
}
