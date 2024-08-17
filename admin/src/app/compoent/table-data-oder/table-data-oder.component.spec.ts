import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataOderComponent } from './table-data-oder.component';

describe('TableDataOderComponent', () => {
  let component: TableDataOderComponent;
  let fixture: ComponentFixture<TableDataOderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDataOderComponent]
    });
    fixture = TestBed.createComponent(TableDataOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
