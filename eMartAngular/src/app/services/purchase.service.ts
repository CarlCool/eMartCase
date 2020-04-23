import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor() { }
  purchaseSampleData = [
      {id:1, buyerId:"Tester", sellerId:"seller1", transferId:1, itemId:1, itemName:"xxx", tax:0.2, itemNumbers:4, itemPrice: 7000, dateTime:"2019-05-06", discount:0.2},
      {id:2, buyerId:"Tester", sellerId:"seller3", transferId:2, itemId:3, itemName:"yyy", tax:0.2, itemNumbers:1, itemPrice: 500, dateTime:"2019-04-08", discount:0},
      {id:3, buyerId:"Buyer1", sellerId:"seller3", transferId:5, itemId:3, itemName:"yyy", tax:0.2, itemNumbers:3, itemPrice: 500, dateTime:"2019-06-10", discount:0},
      {id:4, buyerId:"Tester", sellerId:"seller2", transferId:7, itemId:2, itemName:"zzz", tax:0.2, itemNumbers:1, itemPrice: 8000, dateTime:"2019-06-18", discount:0}
  ]
  getPurchaseHistoryByBuyerId(id:string){
    // get from backend.
    let pruchaseList:any[]= [];
    this.purchaseSampleData.forEach(item=>{
        if(item.buyerId === id){
            pruchaseList.push(item);
        }
    })
    return pruchaseList;
  }

}
