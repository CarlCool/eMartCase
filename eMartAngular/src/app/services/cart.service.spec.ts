import { TestBed } from '@angular/core/testing';

import { DatePipe } from "@angular/common";

import { CartService } from './cart.service';


describe('CartService', () => {
  let service: CartService;
//   let datePipe: DatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
        // imports: [DatePipe],
        declarations:[DatePipe],
        providers:[CartService, DatePipe]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be add cart', () => {
    let cartItemList = [
        {cartId:1, itemId: 2, itemNumbers: 5,buyerId:"Tester", updateDate:"2020-04-21", checked:false},
        {cartId:2, itemId: 1, itemNumbers: 1,buyerId:"Tester", updateDate:"2020-04-21", checked:false}
      ]
      expect(service.getCartItembyUserId("Tester")).toEqual(cartItemList);
  })

});
