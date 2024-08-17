import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      return true; // Cho phép truy cập
    } else {
      this.router.navigate(['/login']); // Điều hướng đến trang đăng nhập nếu không có token
      return false; // Không cho phép truy cập
    }
  }
}
