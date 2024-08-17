import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/Model/product.model';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductService } from 'src/app/Service/product.service';
import { ScrollService } from 'src/app/Service/scroll.service';
import { category } from 'src/app/Model/category.model';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products: Product[] = []; // Danh sách sản phẩm
  relatedProducts: Product[] = []; // Danh sách sản phẩm liên quan
  categories: category[] = []; // Danh sách danh mục
  colorCounts: Map<string, number> = new Map();
  filteredProducts: Product[] = [];
  selectedColor: string = '';
  bestSaleProduct: Product[] = [];
  selectedCategoryName: string | null = null;
  itemsPerPage: number = 9; // Số sản phẩm mỗi trang
  currentPage: number = 1; // Trang hiện tại
  totalPages: number = 1;
  sortOrder: string = 'default';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private scrollService: ScrollService,
    private router: Router,
    private CartService: CartService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadRelatedProducts();
    this.loadCategories();
    this.loadColorCounts();
    this.loadBestSaleProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.ngZone.run(() => this.applyFilters());
    });
  }

  loadRelatedProducts(): void {
    this.productService.getTop3products().subscribe(data => {
      this.relatedProducts = data;
    });
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  loadColorCounts(): void {
    this.productService.getProductCountByColor().subscribe(data => {
      this.colorCounts = new Map(Object.entries(data));
    });
  }

  loadBestSaleProducts(): void {
    this.productService.getBestSaleProducts().subscribe(data => {
      this.bestSaleProduct = data;
    }, error => {
      console.error('Lỗi khi lấy dữ liệu sản phẩm bán chạy', error);
    });
  }

  addToCart(product: Product): void {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingProduct = cartItems.find((item: any) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 ,selectedSize: 38});
    }
    this.CartService.addToCart(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${product.name} đã được thêm vào giỏ hàng`);
  }

  onColorChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      this.selectedColor = target.value;
      this.applyFilters();
    }
  }

  onCategoryChange(categoryName: string): void {
    this.selectedColor = ''; // Bỏ chọn màu khi chọn category mới
    this.selectedCategoryName = categoryName;
    this.applyFilters(); // Áp dụng bộ lọc khi chọn danh mục
  }

  updateColorCounts(): void {
    this.colorCounts.clear();
    this.filteredProducts.forEach(product => {
      const count = this.colorCounts.get(product.color) || 0;
      this.colorCounts.set(product.color, count + 1);
    });
  }

  applyFilters(): void {
    let filtered = this.products.filter(product => {
      const matchesColor = this.selectedColor ? product.color === this.selectedColor : true;
      const matchesCategory = this.selectedCategoryName ? product.category.cname === this.selectedCategoryName : true;
      const withinPriceRange = (this.minPrice !== null ? product.price >= this.minPrice : true) &&
                         (this.maxPrice !== null ? product.price <= this.maxPrice : true);
      return matchesColor && matchesCategory && withinPriceRange;
    });

    // Sorting and pagination logic
    if (this.sortOrder === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    this.filteredProducts = filtered.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
    this.updateColorCounts(); // Cập nhật số lượng màu sau khi lọc sản phẩm
  }

  onPriceChange(): void {
    this.applyFilters();
  }

  sortProducts(order: string): void {
    this.sortOrder = order;
    this.applyFilters();
  }

  setItemsPerPage(items: string): void {
    this.itemsPerPage = parseInt(items, 10);
    this.applyFilters();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilters();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilters();
    }
  }

  searchByModel(model: string): Observable<Product[]> {
    return this.productService.searchProductsByModel(model).pipe(
      tap(data => {
        this.filteredProducts = data; // Cập nhật danh sách sản phẩm được lọc theo model
      })
    );
  }

  navigateAndReload(productId: number): void {
    if (productId) {
      this.router.navigate(['/single-product', productId]).then(() => {
        window.location.reload();
      });
    }
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyFilters();
    }
  }

  changeItemsPerPage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement && selectElement.value) {
      const itemsPerPage = parseInt(selectElement.value, 10);
      this.itemsPerPage = itemsPerPage;
      this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
      this.applyFilters();
    }
  }

  filterByPrice(): void {
    this.applyFilters();
  }
}
