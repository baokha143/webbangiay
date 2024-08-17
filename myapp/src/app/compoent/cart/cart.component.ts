import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    const storedItems = localStorage.getItem('cartItems');
    this.cartItems = storedItems ? JSON.parse(storedItems) : [];
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  updateQuantity(item: any, increment: boolean): void {
    if (increment) {
      item.quantity++;
    } else {
      item.quantity--;
      if (item.quantity === 0) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
        window.location.reload();
      }
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }

    updateSize(item: any, increment: boolean): void {
    if (increment) {
      if(item.selectedSize <= 42){
        item.selectedSize ++;
      }
    } else {
      if(item.selectedSize >= 39){
        item.selectedSize --;
      }
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }
}
