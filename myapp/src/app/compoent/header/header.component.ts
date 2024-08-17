import { CartService } from './../../Service/cart.service';
import { ProductService } from './../../Service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Product } from 'src/app/Model/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';
  cartItemCount: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.checkLoginStatus();
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  checkLoginStatus() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        this.username = decodedToken?.sub;
      } catch (error) {
        console.error('Token không hợp lệ', error);
      }
    } else {
      this.username = 'Người dùng';
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }




}
