import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/product.model';
import { ProductSize } from '../Model/product-size.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getLatestProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/latest`);
  }

  getTop3products(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/top3`);
  }

  getBestSellingProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/top-selling`);
  }

  getBestSaleProducts(): Observable<Product[]> {
    const headers = this.getHeaders();
    return this.http.get<Product[]>(`${this.apiUrl}/top-sale`, { headers });
  }

  getProductCountByColor(): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(`${this.apiUrl}/colors`);
  }

  searchProductsByModel(model: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/search?model=${model}`);
  }

  getSizesByProductId(productId: number): Observable<ProductSize[]> {
    return this.http.get<ProductSize[]>(`${this.apiUrl}/size/${productId}`);
  }

  searchProductsByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/search?name=${name}`);
  }

}
