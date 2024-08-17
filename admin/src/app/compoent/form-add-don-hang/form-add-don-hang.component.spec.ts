import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddDonHangComponent } from './form-add-don-hang.component';

describe('FormAddDonHangComponent', () => {
  let component: FormAddDonHangComponent;
  let fixture: ComponentFixture<FormAddDonHangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddDonHangComponent]
    });
    fixture = TestBed.createComponent(FormAddDonHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
