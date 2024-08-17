import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataProductComponent } from './table-data-product.component';

describe('TableDataProductComponent', () => {
  let component: TableDataProductComponent;
  let fixture: ComponentFixture<TableDataProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDataProductComponent]
    });
    fixture = TestBed.createComponent(TableDataProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
