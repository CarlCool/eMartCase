import { Injectable } from '@angular/core';
import { DatePipe } from "@angular/common";
// import {HttpModule} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
    headers: new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json'})
  };

  constructor(private datePipe:DatePipe, private httpClint: HttpClient) { }
  
  //sample data this data will get from backend.
//   cartItemList = [
//     {cartId:1, itemId: 2, itemNumbers: 5,buyerId:"Tester", updateDate:"2020-04-21", checked:false},
//     {cartId:2, itemId: 1, itemNumbers: 1,buyerId:"Tester", updateDate:"2020-04-21", checked:false}
//   ]

  domain = 'http://localhost:8082/item/cart'
  selectedItemInCart : any[] = [];
  totalIformation : any = {};

  // Get item by buyre with item sucategory and cart information.
  getCartItembyBuyerId(buyerId: number){
    let reqUrl = this.domain + '/' + buyerId;
    return this.httpClint.get(reqUrl);
  }

  // Add item to cart.
  addItemtoCart(cart:any){
    let reqUrl = this.domain;
    return this.httpClint.post(reqUrl, cart, this.httpOptions);
    
  }

  //Delete item form cart list
  deleteItemFromCart(cartId: number){
    let reqUrl = this.domain + '/' + cartId;
    return this.httpClint.delete(reqUrl);
  }

  deleteItemsByList(cart: any[]){
      let reqUrl = this.domain + '/list';
      return this.httpClint.post(reqUrl, cart ,this.httpOptions);
  }

  // send data to transacton.
//   getSelectedItemInCart(cartView){
//     this.selectedItemInCart = cartView;
// 
//   }

}