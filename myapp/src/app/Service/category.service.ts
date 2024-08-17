import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from '../Model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:8080/api/categories'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<category[]> {
    return this.http.get<category[]>(this.apiUrl);
  }

  getCategoryById(id: number): Observable<category> {
    return this.http.get<category>(`${this.apiUrl}/${id}`);
  }

  createCategory(category: category): Observable<category> {
    return this.http.post<category>(this.apiUrl, category);
  }

  updateCategory(id: number, category: category): Observable<category> {
    return this.http.put<category>(`${this.apiUrl}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getProductCountByColor(categoryId?: number): Observable<any> {
    const url = categoryId ? `api/products/color-count?categoryId=${categoryId}` : 'api/products/color-count';
    return this.http.get<any>(url);
  }
}
