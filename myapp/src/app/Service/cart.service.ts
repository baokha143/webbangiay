
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Invoice } from '../Model/invoice.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private baseUrl = 'http://localhost:8080/api/invoices'; // Địa chỉ API của bạn
  private readonly LOCAL_STORAGE_KEY = 'cartItems';
  private cartItemsSubject = new BehaviorSubject<any[]>(this.getCartItems());
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private http: HttpClient) { }

  addToCart(item: any) {
    let cartItems = this.getCartItems();
    const existingProduct = cartItems.find((i: any) => i.id === item.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }
    this.saveCartItems(cartItems);
    this.cartItemsSubject.next(cartItems);
  }

  removeFromCart(itemId: any) {
    let cartItems = this.getCartItems();
    cartItems = cartItems.filter(item => item.id !== itemId);
    this.saveCartItems(cartItems);
    this.cartItemsSubject.next(cartItems);
  }

  getCartItems(): any[] {
    const items = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    return items ? JSON.parse(items) : [];
  }

  private saveCartItems(items: any[]) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(items));
  }

  clearCart() {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    this.cartItemsSubject.next([]);
  }

  getCartItemCount() {
    return this.cartItems$.pipe(
      map(items => items.length)
    );
  }
  addCartItemsToInvoice(cartItems: any[], accountId: number): Observable<Invoice> {
    const invoiceData = {
      accountId: accountId,
      productSizeId: cartItems.map(item => item.productSizeId),
      tongGia: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      ngayXuat: new Date().toISOString(),
      status: 'Pending' // Trạng thái hóa đơn mới
    };

    return this.http.post<Invoice>(this.baseUrl, invoiceData);
  }
}


