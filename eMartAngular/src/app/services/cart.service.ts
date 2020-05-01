import { Injectable } from '@angular/core';
import { DatePipe } from "@angular/common";
// import {HttpModule} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private datePipe:DatePipe) { }
  
  //sample data this data will get from backend.
  cartItemList = [
    {cartId:1, itemId: 2, itemNumbers: 5,buyerId:"Tester", updateDate:"2020-04-21", checked:false},
    {cartId:2, itemId: 1, itemNumbers: 1,buyerId:"Tester", updateDate:"2020-04-21", checked:false}
  ]

  getCartItembyUserId(userId){
      let itemList:any[] = [];
      this.cartItemList.forEach(item=>{
          if (item.buyerId === userId){
            itemList.push(item);
          }
      })
      return itemList;
  }

  addItemtoCart(itemId:number, itemNumbers:number, buyer:string){
      let iteminCart:any = {};
      iteminCart.itemId = itemId;
      iteminCart.itemNumbers = itemNumbers;
      iteminCart.buyerId = buyer;
      let date = new Date();
      iteminCart.updateDate = this.datePipe.transform(date, "yyyy-MM-dd");
      this.cartItemList.push();
  }

}