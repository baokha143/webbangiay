import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-form-add-san-pham',
  templateUrl: './form-add-san-pham.component.html',
  styleUrls: ['./form-add-san-pham.component.css']
})
export class FormAddSanPhamnComponent implements AfterViewInit {
  @ViewChild('uploadfile') uploadfile!: ElementRef<HTMLInputElement>;
  @ViewChild('thumbimage') thumbimage!: ElementRef<HTMLImageElement>;
  @ViewChild('removeimg') removeimg!: ElementRef<HTMLButtonElement>;
  @ViewChild('choicefile') choicefile!: ElementRef<HTMLButtonElement>;
  @ViewChild('filename') filename!: ElementRef<HTMLSpanElement>;

  ngAfterViewInit(): void {
    this.initializeFileUpload();
  }

  private initializeFileUpload(): void {
    // Xử lý sự kiện click cho nút "Chọn file"
    this.choicefile.nativeElement.addEventListener('click', () => {
      this.uploadfile.nativeElement.click();
    });

    // Xử lý sự kiện click cho nút "Xóa hình"
    this.removeimg.nativeElement.addEventListener('click', () => {
      this.resetImageUpload();
    });

    // Xử lý sự kiện thay đổi cho input file
    this.uploadfile.nativeElement.addEventListener('change', (event: Event) => {
      this.readURL(event);
    });
  }

  private resetImageUpload(): void {
    // Reset trạng thái upload hình ảnh
    if (this.thumbimage.nativeElement) {
      this.thumbimage.nativeElement.setAttribute('src', '');
      this.thumbimage.nativeElement.style.display = 'none';
    }
    if (this.uploadfile.nativeElement) {
      this.uploadfile.nativeElement.value = ''; // Xóa giá trị của input file
    }
    if (this.removeimg.nativeElement) {
      this.removeimg.nativeElement.style.display = 'none';
    }
    if (this.choicefile.nativeElement) {
      this.choicefile.nativeElement.style.background = '#14142B';
      this.choicefile.nativeElement.style.cursor = 'pointer';
    }
    if (this.filename.nativeElement) {
      this.filename.nativeElement.textContent = '';
    }
  }

  private readURL(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          if (this.thumbimage.nativeElement) {
            this.thumbimage.nativeElement.setAttribute('src', e.target.result as string);
            this.thumbimage.nativeElement.style.display = 'block';
          }
        }
      };

      reader.readAsDataURL(file);

      // Cập nhật thông tin file
      if (this.filename.nativeElement) {
        this.filename.nativeElement.textContent = file.name;
      }
      if (this.removeimg.nativeElement) {
        this.removeimg.nativeElement.style.display = 'block';
      }
      if (this.choicefile.nativeElement) {
        this.choicefile.nativeElement.style.background = '#14142B';
        this.choicefile.nativeElement.style.cursor = 'default';
      }
    }
  }
}
