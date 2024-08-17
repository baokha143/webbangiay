import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../Service/AccountService';
import { Account } from '../../Model/Account';

@Component({
  selector: 'app-form-add-nhan-vien',
  templateUrl: './form-add-nhan-vien.component.html',
  styleUrls: ['./form-add-nhan-vien.component.css']
})
export class FormAddNhanVienComponent implements OnInit {
  @ViewChild('previewImage') previewImage!: ElementRef<HTMLImageElement>;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (this.previewImage) {
          this.previewImage.nativeElement.src = e.target?.result as string;
          this.previewImage.nativeElement.style.display = 'block';
        }
      };
      
      reader.readAsDataURL(file);
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const formData = new FormData();
      const account: Account = form.value;

      // Append account data to formData
      formData.append('username', account.username || '');
      formData.append('password', account.password || '');
      formData.append('email', account.email || '');
      formData.append('isSell', account.isSell?.toString() || 'false');
      formData.append('isAdmin', account.isAdmin?.toString() || 'false');

      // Append file if exists
      const profileImageInput = document.querySelector('#profileImage') as HTMLInputElement;
      if (profileImageInput.files && profileImageInput.files.length > 0) {
        formData.append('profileImage', profileImageInput.files[0]);
      }

      this.accountService.createAccountWithFile(formData).subscribe({
        next: (response) => {
          console.log('Account created successfully:', response);
          // Handle successful account creation (e.g., redirect, show message)
          form.reset();  // Reset form after successful submission
          if (this.previewImage) {
            this.previewImage.nativeElement.style.display = 'none';  // Hide preview image
          }
        },
        error: (err) => {
          console.error('Error creating account:', err);
          // Handle error (e.g., show error message)
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
