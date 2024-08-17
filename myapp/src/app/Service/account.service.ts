import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080/api/accounts'; // URL của API

  constructor(private http: HttpClient) { }

  // Phương thức để lấy accountId dựa trên username
  getAccountIdByUsername(username: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/id/${username}`);
  }
}
