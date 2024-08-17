import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { Product } from 'src/app/Model/product.model';
import { ViewportScroller } from '@angular/common';
import { ScrollService } from 'src/app/Service/scroll.service';
import { CartService } from 'src/app/Service/cart.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // Khai báo danh sách sản phẩm mới nhất và top 3,sản phẩm bán chạy, sản phẩm top sale
  latestProducts: Product[] = [];
  top3Products: Product[] = [];
  bestSellingProducts: Product[] = [];
  bestSaleProduct: Product[]=[];

  constructor(
    private productService: ProductService,
    private viewportScroller: ViewportScroller,
    private scrollService: ScrollService,
    private cartService: CartService
  ) { }

  ngAfterViewInit(): void {
    // Khởi tạo Owl Carousel sau khi view được khởi tạo
    $('.active-banner-slider').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000
    });
  }

  loadLatestProducts(): void {
    this.productService.getLatestProducts().subscribe(data => {
      this.latestProducts = data;
    }, error => {
      console.error('Lỗi khi lấy dữ liệu sản phẩm mới nhất', error);
    });
  }

  loadTop3Products(): void {
    this.productService.getTop3products().subscribe(data => {
      this.top3Products = data.slice(0, 1); // Chỉ lấy 1 sản phẩm đầu tiên

    }, error => {
      console.error('Lỗi khi lấy dữ liệu 3 sản phẩm mới nhất', error);
    });
  }

  loadBestSaleProducts(): void {
    this.productService.getBestSaleProducts().subscribe(data => {
      this.bestSaleProduct = data;
    }, error => {
      console.error('Lỗi khi lấy dữ liệu sản phẩm bán chạy', error);
    });
  }

  loadBestSellingProducts(): void {
    this.productService.getBestSellingProducts().subscribe(data => {
      this.bestSellingProducts = data;
    }, error => {
      console.error('Lỗi khi lấy dữ liệu sản phẩm bán chạy', error);
    });
  }

  // Phương thức thêm sản phẩm vào giỏ hàng
  addToCart(product: Product): void {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

    const existingProduct = cartItems.find((item: any) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 ,selectedSize: 38});
    }
    this.cartService.addToCart(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${product.name} đã được thêm vào giỏ hàng`);
  }

 //--------- countdown time -----------//
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  countdownDate: number = new Date('2024-12-31T23:59:59').getTime();

  ngOnInit(): void {
    this.startCountdown();
    this.loadLatestProducts();
    this.loadBestSellingProducts();
    this.loadTop3Products();
    this.loadBestSaleProducts();
  }

  startCountdown(): void {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }



}
