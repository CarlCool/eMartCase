import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor() { }
  purchaseSampleData = [
      {id:1, buyerId:"tester@test.com", sellerId:"seller@test.com", transferId:1, itemId:1, itemName:"xxx", tax:0.2, itemNumbers:4, itemPrice: 7000, dateTime:"2020-05-06", discount:0.2},
      {id:2, buyerId:"tester@test.com", sellerId:"seller@test.com", transferId:2, itemId:3, itemName:"yyy", tax:0.2, itemNumbers:1, itemPrice: 500, dateTime:"2020-04-08", discount:0},
      {id:3, buyerId:"buyer1@test.com", sellerId:"seller@test.com", transferId:5, itemId:3, itemName:"yyy", tax:0.2, itemNumbers:5, itemPrice: 500, dateTime:"2020-03-10", discount:0},
      {id:4, buyerId:"buyer@test.com", sellerId:"seller1@test,com", transferId:7, itemId:2, itemName:"zzz", tax:0.2, itemNumbers:1, itemPrice: 8000, dateTime:"2020-05-18", discount:0}
  ]
  getPurchaseHistoryByBuyerId(buyerid:string){
    // get from backend.
    let pruchaseList:any[]= [];
    this.purchaseSampleData.forEach(item=>{
        if(item.buyerId === buyerid){
            pruchaseList.push(item);
        }
    })
    return pruchaseList;
  }

  getPurchaseListBySellerId(sellerid:string){
      let purchaseList:any[] = [];
      this.purchaseSampleData.forEach(pur=>{
          if(pur.sellerId === sellerid){
            purchaseList.push(pur)
          }
      });
      return purchaseList;
  }

}
