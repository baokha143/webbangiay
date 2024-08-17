import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../Service/AccountService';
import { Account } from '../../Model/Account';

@Component({
  selector: 'app-table-data-table',
  templateUrl: './table-data-table.component.html',
  styleUrls: ['./table-data-table.component.css']
})
export class TableDataTableComponent implements OnInit {
  accounts: Account[] = [];
  editForm: FormGroup;
  selectedFile: File | null = null;  // Biến để lưu file đã chọn
  previewImageUrl: string = '';      // Đặt giá trị mặc định cho previewImageUrl
  isModalVisible: boolean = false;  // Biến điều khiển việc hiển thị modal

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      uid: [{ value: '', disabled: true }], // Trường uId được hiển thị nhưng không chỉnh sửa
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      isSell: [false],
      isAdmin: [false],
      profileImage: ['']
    });
  }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts: Account[]) => {
      this.accounts = accounts.map(account => ({
        ...account,
        profileImage: account.profileImage ? this.convertToAbsoluteUrl(account.profileImage) : ''
      }));
    });
  }

  loadAccounts(): void {
    this.accountService.getAccounts().subscribe(data => {
      console.log('Loaded accounts:', data); // Kiểm tra dữ liệu trả về
      this.accounts = data; // Sử dụng trực tiếp nếu trường uId là chính xác
    });
  }

  deleteAccount(uId: number): void {
    if (confirm('Bạn có chắc muốn xóa nhân viên này?')) {
      this.accountService.deleteAccount(uId).subscribe(() => {
        this.accounts = this.accounts.filter(account => account.uid !== uId);
      });
    }
  }

  deleteSelectedAccounts(): void {
    const selectedIds = this.accounts.filter(account => account.selected).map(account => account.uid);
    if (selectedIds.length && confirm('Bạn có chắc muốn xóa những nhân viên đã chọn?')) {
      this.accountService.deleteAccounts(selectedIds).subscribe(() => {
        this.accounts = this.accounts.filter(account => !account.selected);
      });
    }
  }

  toggleAll(event: any): void {
    const checked = event.target.checked;
    this.accounts.forEach(account => account.selected = checked);
  }

  editAccount(account: Account): void {
    this.editForm.patchValue({
      uid: account.uid,
      username: account.username,
      password: account.password || '',
      email: account.email,
      isSell: account.isSell,
      isAdmin: account.isAdmin
    });
  
    // Xây dựng URL tuyệt đối cho hình ảnh nếu đường dẫn hình ảnh có giá trị
    this.previewImageUrl = account.profileImage ? this.convertToAbsoluteUrl(account.profileImage) : '';
    this.isModalVisible = true; // Hiển thị modal
  }
  
  private convertToAbsoluteUrl(relativeUrl: string): string {
    const baseUrl = 'http://localhost:8080/api/accounts/profileImage/'; // Thay đổi baseUrl theo cấu hình của bạn
    return `${baseUrl}${relativeUrl}`;
  }
  
  

  closeModal(): void {
    this.isModalVisible = false;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.selectedFile = file; // Cập nhật file được chọn
    }
  }

  onSave(): void {
    if (this.editForm.valid) {
      const account = this.editForm.getRawValue() as Account;
      const uid = this.editForm.get('uid')?.value;

      if (!uid) {
        console.error('uId is not defined. Cannot save account.');
        return;
      }

      if (this.selectedFile) {
        this.accountService.updateAccountWithFile(account, this.selectedFile).subscribe({
          next: () => {
            this.loadAccounts();
            this.closeModal();
          },
          error: (err) => {
            console.error('Error updating account with file:', err);
          }
        });
      } else {
        this.accountService.updateAccount(account).subscribe({
          next: () => {
            this.loadAccounts();
            this.closeModal();
          },
          error: (err) => {
            console.error('Error updating account:', err);
          }
        });
      }
    } else {
      console.error('Form is not valid.');
    }
  }
}
