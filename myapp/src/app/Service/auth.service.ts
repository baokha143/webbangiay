import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth'; // Adjust the URL according to your backend

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post<{ jwtToken: string }>(`${this.baseUrl}/login`, credentials);
  }

  register(data: any) {
    return this.http.post<{ message: string }>(`${this.baseUrl}/register`, data);
  }

  forgotPassword(email: string) {
    return this.http.post(`${this.baseUrl}/forgot-password`, { email }, { responseType: 'text' });
  }
  isLoggedIn(): boolean {
    // Giả sử bạn lưu trữ thông tin đăng nhập trong localStorage
    return !!localStorage.getItem('token');
  }

  getUsername(): string | null {
    // Lấy tên người dùng từ localStorage
    return localStorage.getItem('username');
  }
}
