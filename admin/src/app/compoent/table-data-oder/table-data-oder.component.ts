import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../../Service/InvoiceService'; // Đảm bảo đường dẫn đúng

@Component({
  selector: 'app-table-data-order',
  templateUrl: './table-data-oder.component.html',
  styleUrls: ['./table-data-oder.component.css']
})
export class TableDataOderComponent implements OnInit {
  invoices: any[] = []; // Danh sách đơn hàng

  constructor(
    private invoiceService: InvoiceService, // Service để lấy dữ liệu đơn hàng
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadInvoices();
  }

  // Lấy danh sách đơn hàng từ server
  loadInvoices(): void {
    this.invoiceService.getAllInvoices().subscribe({
      next: (data) => {
        this.invoices = data;
      },
      error: (err) => {
        console.error('Error fetching invoices', err);
      }
    });
  }

  // Xóa tất cả đơn hàng
  deleteAll(): void {
    // Thực hiện xóa tất cả đơn hàng
    if (confirm('Bạn có chắc chắn muốn xóa tất cả đơn hàng không?')) {
      this.invoiceService.deleteAllInvoices().subscribe({
        next: () => {
          this.loadInvoices(); // Tải lại danh sách đơn hàng
        },
        error: (err) => {
          console.error('Error deleting all invoices', err);
        }
      });
    }
  }

  // Xóa đơn hàng theo maHD
  deleteInvoice(maHD: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa đơn hàng này không?')) {
      this.invoiceService.deleteInvoice(maHD).subscribe({
        next: () => {
          this.loadInvoices(); // Tải lại danh sách đơn hàng
        },
        error: (err) => {
          console.error('Error deleting invoice', err);
        }
      });
    }
  }
}
