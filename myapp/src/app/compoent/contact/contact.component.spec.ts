import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ContactComponent]
    });

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send form data to the server', () => {
    const formData = new FormData();
    formData.append('name', 'nguyenhieu');
    formData.append('email', 'mmxly46@gmail.com');
    formData.append('subject', 'Test Subject');
    formData.append('message', 'Test Message');

    component.contactForm.setValue({
      name: 'nguyenhieu',
      email: 'mmxly46@gmail.com',
      subject: 'Test Subject',
      message: 'Test Message'
    });

    component.sendContactForm();

    const req = httpMock.expectOne('http://localhost:4200/contact_process.php');
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });

    httpMock.verify();
  });
});
