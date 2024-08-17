import { CartService } from './../../Service/cart.service';
import { AccountService } from './../../Service/account.service';
import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Model/product.model';
import { ProductService } from 'src/app/Service/product.service';
import { ScrollService } from 'src/app/Service/scroll.service';
import { ProductSize } from 'src/app/Model/product-size.model';
import { ReviewService } from 'src/app/Service/review.service';
import { Review } from 'src/app/Model/review.model';
import { AuthService } from 'src/app/Service/auth.service';
import { jwtDecode } from 'jwt-decode';

declare var $: any;

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit, AfterViewChecked {
  bestSaleProduct: Product[] = [];
  product: Product | null = null;
  quantity: number = 1;
  sizes: string[] = [];
  firstStock: number | null = null;
  selectedStock: ProductSize | null = null;
  selectedSize: string | null = null;
  colors: string[] = [];
  selectedColor: string | null = null;
  allProduct: Product[] = [];
  uniqueColors: string[] = [];
  colorMap: Map<string, number> = new Map();
  SizeMap: Map<number, number> = new Map();
  reviews: Review[] = [];
  isLoggedIn: boolean = false;
  accountId: number | undefined;
  sizeData: ProductSize[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private productService: ProductService,
    private router: Router,
    private scrollService: ScrollService,
    private reviewService: ReviewService,
    private authService: AuthService,
    private accountService: AccountService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProduct();
    this.loadBestSaleProducts();
    this.loadReviews();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  selectSize(size: string): void {
    this.selectedSize = size;
    localStorage.setItem('selectedSize', this.selectedSize);

    // Cập nhật selectedStock và firstStock dựa trên kích thước đã chọn
    const selectedSizeData = this.sizeData.find(sizeData => sizeData.size.toString() === size);
    if (selectedSizeData) {
      this.selectedStock = selectedSizeData;
      this.firstStock = this.selectedStock.stock > 0 ? this.selectedStock.stock : 0;
    } else {
      this.selectedStock = null;
      this.firstStock = 0;
    }
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  loadProduct(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.http.get<Product>(`http://localhost:8080/api/products/${productId}`).subscribe(
        productData => {
          this.product = productData;
          if (this.product) {
            this.quantity = 1;
            const targetProductName = this.product.name;
            const targetProductKeywords = targetProductName.split(' ').slice(0, 5).join(' ');

            this.productService.getAllProducts().subscribe(
              data => {
                this.allProduct = data;
                const filteredProducts = this.allProduct.filter(p => {
                  const productNameKeywords = p.name.split(' ').slice(0, 5).join(' ');
                  return productNameKeywords === targetProductKeywords;
                });

                this.colorMap.clear();
                this.colors = [];
                filteredProducts.forEach(p => {
                  if (p.color) {
                    const normalizedColor = p.color.toLowerCase();
                    this.colors.push(normalizedColor);
                    this.colorMap.set(normalizedColor, p.id!);
                  }
                });

                this.uniqueColors = [...new Set(this.colors)];

                console.log('Filtered Colors:', this.colors);
                console.log('Unique Colors:', this.uniqueColors);
                console.log('Color Map:', this.colorMap);
              },
              error => {
                console.error('Lỗi khi lấy dữ liệu sản phẩm!', error);
              }
            );
          }
        },
        error => {
          console.error('Lỗi khi tải dữ liệu sản phẩm!', error);
        }
      );

      this.http.get<ProductSize[]>(`http://localhost:8080/api/products/size/${productId}`).subscribe(
        sizeDataArray => {
          if (sizeDataArray && sizeDataArray.length > 0) {
            this.sizeData = sizeDataArray;

            // Cập nhật SizeMap với các kích cỡ và số lượng
            this.sizeData.forEach(sizeData => {
              const sizeAsNumber = parseInt(sizeData.size, 10);
              this.SizeMap.set(sizeAsNumber, sizeData.stock);
            });

            // Chọn kích cỡ đầu tiên làm kích cỡ đã chọn mặc định
            this.selectedSize = this.sizeData[0].size.toString();
            this.selectedStock = this.sizeData[0];
            this.firstStock = this.selectedStock.stock > 0 ? this.selectedStock.stock : 0;
          }
        },
        error => {
          console.error('Lỗi khi tải dữ liệu kích cỡ sản phẩm!', error);
        }
      );
    }
  }

  loadReviews(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    if (productId) {
      this.reviewService.getReviewsByProductId(productId).subscribe(
        reviews => {
          this.reviews = reviews;
        },
        error => {
          console.error('Lỗi khi tải dữ liệu review!', error);
        }
      );
    }
  }

  navigateAndReload(productId: number): void {
    if (productId) {
      this.router.navigate(['/single-product', productId]).then(() => {
        window.location.reload();
      });
    }
  }

  loadBestSaleProducts(): void {
    this.productService.getBestSaleProducts().subscribe(
      data => {
        this.bestSaleProduct = data;
      },
      error => {
        console.error('Lỗi khi lấy dữ liệu sản phẩm bán chạy', error);
      }
    );
  }

  incrementQuantity(): void {
    if (this.product && this.quantity < (this.firstStock || 0)) {
      this.quantity++;
    } else {
      alert('Số lượng vượt quá hàng tồn kho!');
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(product: Product): void {
    if (product) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const existingItem = cartItems.find((item: any) => item.id === product.id && item.selectedSize === this.selectedSize);

      if (existingItem) {
        existingItem.quantity += this.quantity;
      } else {
        const selectedSize = localStorage.getItem('selectedSize');
        const sizeToUse = selectedSize && selectedSize !== "" ? selectedSize : "38";
        cartItems.push({
          ...product,
          quantity: this.quantity,
          selectedSize: sizeToUse,
          stock: this.firstStock
        });
      }
      this.cartService.addToCart(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      alert(`${product.name} đã được thêm vào giỏ hàng với ${this.quantity} số lượng và kích thước ${this.selectedSize || 38}!`);
    }
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
    $('.s_Product_carousel').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000
    });
  }

  onColorClick(color: string): void {
    const productId = this.colorMap.get(color);
    if (productId) {
      this.router.navigate(['/single-product', productId]).then(() => {
        window.location.reload();
      });
    }
  }



  submitReview(): void {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const username = decodedToken?.sub;
      if (!username) {
        console.error('Token không hợp lệ');
        return;
      }
      console.log(username);
      this.accountService.getAccountIdByUsername(username).subscribe(
        (id: number) => {
          this.accountId = id;
          if (!this.accountId || !this.product) {
            console.error('Thiếu accountId hoặc dữ liệu sản phẩm');
            return;
          }

          const contentReview = (document.getElementById('message') as HTMLTextAreaElement)?.value;
          if (!contentReview) {
            console.error('Nội dung review bị thiếu');
            return;
          }

          const newReview: Review = {
            maReview: 0,
            account: {
              accountID: id,
              username: username
            },
            product: {
              productID: this.product.id!,
              name: this.product.name
            },
            contentReview: contentReview,
            dateReview: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          console.log(newReview);
          this.reviewService.addReview(newReview).subscribe(
            (response: string) => {
              console.log('Review đã được thêm:', response);
              this.reviews.push(newReview);
              (document.getElementById('message') as HTMLTextAreaElement).value = '';
            },
            (error) => {
              console.error('Lỗi khi thêm review:', error);
            }
          );
        },
        (error) => {
          console.error('Lỗi khi lấy accountId:', error);
        }
      );
    } else {
      console.error('Token không được tìm thấy trong localStorage!');
    }
  }
}
