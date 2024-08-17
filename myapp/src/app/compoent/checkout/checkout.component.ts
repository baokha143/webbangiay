import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CartService } from './../../Service/cart.service';
import { VnpayService } from 'src/app/services/vnpay.service';
import { InvoiceService } from 'src/app/Service/invoice.service';
import { Invoice } from 'src/app/Model/invoice.model'; // Import Invoice model
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';
  cartItemCount: number = 0;
  cartItems: any[] = [];
  total: number = 0;
  selectedPaymentMethod: string = '';
  paymentMethod = 'vnpay'; // Phương thức thanh toán mặc định
  vnp_TmnCode = 'RGA3KLLD';
  vnp_HashSecret = 'PM7OMPUQ87MIGFI1SBJBE9LS13B19FJ6'; // Chuỗi bí mật của bạn
  vnp_ReturnUrl = 'http://localhost:4200/vnpay-return'; // URL trả về của bạn
  vnp_Url = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'; // URL thanh toán VNPAY
  accountId = 123; // ID tài khoản người dùng

  constructor(
    private router: Router,
    private cartService: CartService,
    private vnpayService: VnpayService,
    private invoiceService: InvoiceService // Inject InvoiceService
  ) {}

  ngOnInit() {
    this.checkLoginStatus();
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

  checkLoginStatus() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        this.username = decodedToken?.sub || 'Người dùng';
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

  onPaymentMethodChange(method: string) {
    this.selectedPaymentMethod = method;
  }

  initiatePayment() {
    const orderDescription = this.username;
    const orderType = 'other';
    const language = 'vn'; // Hoặc 'en' tùy theo lựa chọn của người dùng

    if (this.selectedPaymentMethod === 'TienMat') {
      // Nếu phương thức thanh toán là "Thu Tiền Mặt", điều hướng đến trang home và tải lại trang
      this.createInvoice();
      localStorage.removeItem('cartItems'); // Xóa dữ liệu khỏi localStorage
      this.router.navigate(['']).then(() => {
        window.location.reload(); // Tải lại trang
      });
    } else if (this.selectedPaymentMethod === 'vnpay') {
      // Nếu phương thức thanh toán là VNPAY, thực hiện gọi dịch vụ tạo URL thanh toán
      this.createInvoice().subscribe(
        () => {
          this.vnpayService.createPaymentUrl(this.total, orderDescription, orderType, language)
            .subscribe(
              (response: any) => {
                if (response.paymentUrl) {
                  window.location.href = response.paymentUrl;
                }
              },
              error => {
                console.error('Lỗi khi khởi tạo thanh toán', error);
              }
            );
        },
      );
    }
  }

  // Phương thức để tạo hóa đơn mới
  createInvoice(): Observable<Invoice> {
    const invoice: Invoice = {
      account: { id: this.accountId }, // Sử dụng object thay vì chỉ là số ID
      cartItems: this.cartItems,
      total: this.total,
      status: 'PENDING' // Trạng thái hóa đơn là PENDING
    };
    return this.invoiceService.createInvoice(invoice);
  }
}
