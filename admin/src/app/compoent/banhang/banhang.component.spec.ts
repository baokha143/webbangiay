import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanhangComponent } from './banhang.component';

describe('BanhangComponent', () => {
  let component: BanhangComponent;
  let fixture: ComponentFixture<BanhangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanhangComponent]
    });
    fixture = TestBed.createComponent(BanhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
