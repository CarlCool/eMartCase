import { TestBed } from '@angular/core/testing';

import { BuyerLogonGuard } from './buyer-logon.guard';

describe('BuyerLogonGuard', () => {
  let guard: BuyerLogonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BuyerLogonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
