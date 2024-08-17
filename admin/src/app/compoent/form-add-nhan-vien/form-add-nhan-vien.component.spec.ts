import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddNhanVienComponent } from './form-add-nhan-vien.component';

describe('FormAddNhanVienComponent', () => {
  let component: FormAddNhanVienComponent;
  let fixture: ComponentFixture<FormAddNhanVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddNhanVienComponent]
    });
    fixture = TestBed.createComponent(FormAddNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
