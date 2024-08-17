import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../Service/AccountService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  passwordFieldType: string = 'password';
  userName: string | null = null;
  userAvatar: string | null = null;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    // Lấy thông tin người dùng từ localStorage nếu có
    this.userName = localStorage.getItem('userName');
    this.userAvatar = localStorage.getItem('userAvatar');
  }

  onSubmit() {
    this.accountService.login(this.username, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('jwtToken', response.jwtToken);

        this.accountService.getUserInfo().subscribe(
          userInfo => {
            localStorage.setItem('userName', userInfo.username);
            localStorage.setItem('userAvatar', userInfo.profileImage ?? '');

            // Cập nhật thông tin trong component
            this.userName = userInfo.username;
            this.userAvatar = userInfo.profileImage ?? '';

            this.router.navigate(['']); // Chuyển hướng tới trang dashboard sau khi đăng nhập thành công
          },
          error => {
            console.error('Lỗi lấy thông tin người dùng:', error);
          }
        );
      },
      error => {
        console.error('Lỗi đăng nhập:', error);
        alert('Đăng nhập không thành công');
      }
    );
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
