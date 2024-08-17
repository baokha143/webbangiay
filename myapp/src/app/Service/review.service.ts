import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../Model/review.model'; // Bạn cần tạo model cho Review

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseUrl = 'http://localhost:8080/api/reviews'; // URL của API

  constructor(private http: HttpClient) { }

  // Load Review theo Product-ID.
  getReviewsByProductId(productId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/product/${productId}`);
  }

  // Thêm một review.
  addReview(review: Review): Observable<string> {
    // Đặt responseType là 'text' để nhận phản hồi dưới dạng văn bản
    return this.http.post<string>(`${this.baseUrl}/add`, review, { responseType: 'text' as 'json' });
  }

  // Cập nhật một review.
  updateReview(id: number, reviewDetails: Review): Observable<Review> {
    return this.http.put<Review>(`${this.baseUrl}/update/${id}`, reviewDetails);
  }

  // Xóa một review.
  deleteReview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
