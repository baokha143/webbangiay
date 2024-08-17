import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service'; // Adjust the path to your auth service
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentForm: 'login' | 'register' | 'forgot' = 'login';
  formData: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  toggleForm(formType: 'login' | 'register' | 'forgot') {
    this.currentForm = formType;
  }

  onSubmit() {
    if (this.currentForm === 'login') {
      this.authService.login(this.formData).subscribe(
        response => {
          const token = response.jwtToken;
          if (token) {
            localStorage.setItem('token', token);
            this.navigateToHome();
          } else {
            console.error('Token không được trả về từ server.');
          }
        },
        error => {
          console.error('Lỗi đăng nhập:', error);
        }
      );
    } else if (this.currentForm === 'register') {
      this.authService.register(this.formData).subscribe(
        response => {
          console.log(response.message); // Log success message
          this.toggleForm('login');
          this.navigateTologin();
        },
        error => {
          console.error('Lỗi đăng ký:', error);
        }
      );
    } else if (this.currentForm === 'forgot') {
      this.authService.forgotPassword(this.formData.email).subscribe(
        response => {
          alert(response); // Handle success response
        },
        error => {
          console.error('Lỗi quên mật khẩu:', error);
        }
      );
    }
  }

  navigateToHome() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
  
  navigateTologin() {
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });
  }
}
