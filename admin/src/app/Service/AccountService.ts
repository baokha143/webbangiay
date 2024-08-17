import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../Model/Account';
import { AuthenticationResponse } from '../Model/authentication-response.model'; // Import model

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/api/accounts';
  private authUrl = 'http://localhost:8080/api/auth'; // API endpoint for authentication

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): { headers: HttpHeaders } {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      console.error('Token is missing');
      return { headers: new HttpHeaders() };
    }
    return {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl, this.getAuthHeaders());
  }

  deleteAccount(uId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${uId}`, this.getAuthHeaders());
  }

  deleteAccounts(uIds: number[]): Observable<void> {
    return this.http.request<void>('DELETE', this.apiUrl, { body: uIds, ...this.getAuthHeaders() });
  }

  updateAccount(account: Account, file?: File): Observable<Account> {
    const formData = new FormData();
    formData.append('username', account.username);
    formData.append('password', account.password || '');
    formData.append('email', account.email);
    formData.append('isSell', account.isSell.toString());
    formData.append('isAdmin', account.isAdmin.toString());
    
    if (file) {
      formData.append('profileImage', file, file.name);
    }
  
    return this.http.put<Account>(`${this.apiUrl}/${account.uid}`, formData, this.getAuthHeaders());
  }

updateAccountWithFile(account: Account, file: File): Observable<Account> {
  const formData = new FormData();
  formData.append('uId', account.uid.toString());  // Kiểm tra nếu uid là số nguyên
  formData.append('username', account.username);
  formData.append('password', account.password || '');
  formData.append('email', account.email);
  formData.append('isSell', account.isSell.toString());
  formData.append('isAdmin', account.isAdmin.toString());
  formData.append('profileImage', file, file.name);

  return this.http.put<Account>(`${this.apiUrl}/${account.uid}`, formData, this.getAuthHeaders());
}


  login(username: string, password: string): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.authUrl}/login`, { 
        username, 
        password 
    }, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  // Phương thức để lấy thông tin người dùng từ token JWT
  getUserInfo(): Observable<Account> {
    return this.http.get<Account>(`${this.authUrl}/user-info`, this.getAuthHeaders());
  }

  // Phương thức mới để tạo tài khoản
  createAccount(formData: FormData): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, formData, this.getAuthHeaders());
  }

  // Phương thức mới để tạo tài khoản với file
  createAccountWithFile(formData: FormData): Observable<Account> {
    return this.http.post<Account>(`${this.apiUrl}/create`, formData, this.getAuthHeaders());
  }
}
