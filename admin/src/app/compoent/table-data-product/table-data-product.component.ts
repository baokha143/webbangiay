import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/ProductService';
import { CategoryService } from '../../Service/CategoryService';

@Component({
  selector: 'app-table-data-product',
  templateUrl: './table-data-product.component.html',
  styleUrls: ['./table-data-product.component.css']
})
export class TableDataProductComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  selectedProduct: any = {};
  isModalVisible: boolean = false;

  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  deleteProduct(productId: number) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      this.productService.deleteProduct(productId).subscribe(() => {
        this.loadProducts();
      });
    }
  }

  openModal(product: any) {
    this.selectedProduct = { ...product };
    this.isModalVisible = true;
  }

  handleClose() {
    this.isModalVisible = false;
  }

  saveProduct() {
    if (this.selectedProduct.id) {
      this.productService.updateProduct(this.selectedProduct).subscribe(() => {
        this.loadProducts();
        this.isModalVisible = false;
      });
    } else {
      this.productService.addProduct(this.selectedProduct).subscribe(() => {
        this.loadProducts();
        this.isModalVisible = false;
      });
    }
  }

  importFromFile() {
    // Thực hiện chức năng nhập từ file ở đây
  }

  selectAll(event: any) {
    const checked = event.target.checked;
    this.products.forEach(product => product.selected = checked);
  }
}
