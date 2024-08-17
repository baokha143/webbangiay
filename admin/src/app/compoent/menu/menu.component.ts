import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userName: string | null = null;
  userAvatar: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.userAvatar = localStorage.getItem('userAvatar');
  }

  logout() {
    // Xóa thông tin người dùng và token khỏi localStorage
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userAvatar');

    // Điều hướng về trang đăng nhập
    this.router.navigate(['/login']);
  }
}
