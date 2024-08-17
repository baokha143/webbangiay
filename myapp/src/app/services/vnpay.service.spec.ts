import { VnpayService } from 'src/app/services/vnpay.service';
import { TestBed } from '@angular/core/testing';


describe('VnpayService', () => {
  let service: VnpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VnpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
