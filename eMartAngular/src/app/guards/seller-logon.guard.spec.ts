import { TestBed } from '@angular/core/testing';

import { SellerLogonGuard } from './seller-logon.guard';

describe('SellerLogonGuard', () => {
  let guard: SellerLogonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellerLogonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
