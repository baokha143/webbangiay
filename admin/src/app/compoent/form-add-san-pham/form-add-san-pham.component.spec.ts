import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddSanPhamComponent } from './form-add-san-pham.component';

describe('FormAddSanPhamComponent', () => {
  let component: FormAddSanPhamComponent;
  let fixture: ComponentFixture<FormAddSanPhamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddSanPhamComponent]
    });
    fixture = TestBed.createComponent(FormAddSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
