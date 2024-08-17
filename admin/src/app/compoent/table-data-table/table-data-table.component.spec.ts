import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataTableComponent } from './table-data-table.component';

describe('TableDataTableComponent', () => {
  let component: TableDataTableComponent;
  let fixture: ComponentFixture<TableDataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDataTableComponent]
    });
    fixture = TestBed.createComponent(TableDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
