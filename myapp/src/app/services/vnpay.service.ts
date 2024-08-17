import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VnpayService {
  private apiUrl = 'http://localhost:8080/api/payment';

  constructor(private http: HttpClient) { }
  createPaymentUrl(amount: number, orderDescription: string, orderType: string, language: string, bankCode?: string): Observable<any> {
    let params = new HttpParams()
      .set('amount', String(amount))
      .set('orderDescription', orderDescription)
      .set('orderType', orderType)
      .set('language', language);

    if (bankCode) {
      params = params.set('bankCode', bankCode);
    }

    return this.http.get<any>(`${this.apiUrl}/create-payment-url`, { params });
  }
}
