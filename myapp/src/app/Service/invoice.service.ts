import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../Model/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseUrl = 'http://localhost:8080/api/invoices'; // Địa chỉ API của bạn

  constructor(private http: HttpClient) { }

  getAllInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseUrl);
  }

  getInvoiceById(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.baseUrl}/${id}`);
  }

  createInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.baseUrl, invoice);
  }

  updateInvoice(id: number, invoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(`${this.baseUrl}/${id}`, invoice);
  }

  deleteInvoice(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getInvoicesByAccountId(accountId: number): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.baseUrl}/account/${accountId}`);
  }

  getTotalAmountByAccountId(accountId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total-amount/${accountId}`);
  }

  updateInvoiceStatus(id: number, status: string): Observable<Invoice> {
    return this.http.patch<Invoice>(`${this.baseUrl}/${id}/status`, null, { params: { status } });
  }
}
