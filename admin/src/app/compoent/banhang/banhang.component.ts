import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import Swal from 'sweetalert';

@Component({
  selector: 'app-banhang',
  templateUrl: './banhang.component.html',
  styleUrls: ['./banhang.component.css']
})
export class BanhangComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    // Có thể thực hiện các khởi tạo khác ở đây nếu cần
  }

  ngAfterViewInit(): void {
    // Khởi tạo DataTable sau khi view đã được khởi tạo
    $('#sampleTable').DataTable();

    // Khởi tạo sự kiện cho các nút xóa
    $(".trash").click(() => {
      Swal({
        title: "Cảnh báo",
        text: "Bạn có chắc chắn là muốn xóa?",
        buttons: ["Đóng", "Đồng ý"],
      }).then((willDelete: boolean) => { // Cập nhật kiểu dữ liệu cho willDelete
        if (willDelete) {
          Swal("Đã xóa thành công.!");
        }
      });
    });

    // Khởi tạo modal popup
    this.setupModal();
    // Bắt đầu cập nhật thời gian sau khi view đã khởi tạo
    this.time();
  }

  // Function to delete a row from the table
  deleteRow(r: HTMLElement): void {
    const row = r.parentNode?.parentNode as HTMLTableRowElement | null;
    if (row) {
      const table = document.getElementById('myTable') as HTMLTableElement;
      table?.deleteRow(row.rowIndex);
    }
  }

  // Function to show time and date
  time(): void {
    const today = new Date();
    const weekday = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const day = weekday[today.getDay()];
    let dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = this.checkTime(m);
    s = this.checkTime(s);
    const nowTime = `${h} giờ ${m} phút ${s} giây`;

    if (dd < 10) {
      dd = Number('0' + dd);
    }

    const formattedMM = mm < 10 ? '0' + mm : mm;
    const formattedDD = dd < 10 ? '0' + dd : dd;

    const todayStr = `${day}, ${formattedDD}/${formattedMM}/${yyyy}`;
    const tmp = `<span class="date"> <i class="bx bxs-calendar" ></i> ${todayStr} | <i class="fa fa-clock-o" aria-hidden="true"></i>  : ${nowTime}</span>`;

    const clockElement = document.getElementById("clock");
    if (clockElement) {
      clockElement.innerHTML = tmp;
    }

    setTimeout(() => this.time(), 1000);
  }

  private checkTime(i: number): number {
    return i < 10 ? Number("0" + i) : i;
  }

  private setupModal(): void {
    const modal = document.getElementById("myModal") as HTMLElement;
    const btn = document.getElementById("myBtn") as HTMLElement;
    const span = document.getElementsByClassName("close")[0] as HTMLElement;

    if (btn && modal && span) {
      btn.onclick = () => {
        modal.style.display = "block";
      };

      span.onclick = () => {
        modal.style.display = "none";
      };

      window.onclick = (event: MouseEvent) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }
  }
}
