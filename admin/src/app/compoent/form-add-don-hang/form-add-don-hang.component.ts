import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-don-hang',
  templateUrl: './form-add-don-hang.component.html',
  styleUrls: ['./form-add-don-hang.component.css']
})
export class FormAddDonHangComponent implements OnInit {
  orderForm!: FormGroup;
  colors: string[] = ['Đỏ', 'Xanh', 'Vàng', 'Trắng', 'Đen'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.orderForm = this.fb.group({
      id: [''],  // ID đơn hàng
      customerName: [''],  // Tên khách hàng
      customerPhone: [''],  // Số điện thoại khách hàng
      customerAddress: [''],  // Địa chỉ khách hàng
      sellerName: [''],  // Tên người bán
      sellerId: [''],  // Số hiệu người bán
      orderDate: [null],  // Ngày làm đơn hàng
      productName: [''],  // Tên sản phẩm cần bán
      productId: [''],  // Mã sản phẩm
      quantity: [0],  // Số lượng
      status: [''],  // Tình trạng
      notes: [''],  // Ghi chú đơn hàng
      color: ['']  // Màu sắc
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
      // Implement form submission logic here
    }
  }
}
