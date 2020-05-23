import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
    headers: new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json'})
  };

  constructor(private httpClient : HttpClient) { }

//   purchaseSampleData = [
//       {id:1, buyerId:"tester@test.com", sellerId:"seller@test.com", transferId:1, itemId:1, itemName:"xxx", tax:0.2, itemNumbers:4, itemPrice: 7000, dateTime:"2020-05-06", discount:0.2},
//       {id:2, buyerId:"tester@test.com", sellerId:"seller@test.com", transferId:2, itemId:3, itemName:"yyy", tax:0.2, itemNumbers:1, itemPrice: 500, dateTime:"2020-04-08", discount:0},
//       {id:3, buyerId:"buyer1@test.com", sellerId:"seller@test.com", transferId:5, itemId:3, itemName:"yyy", tax:0.2, itemNumbers:5, itemPrice: 500, dateTime:"2020-03-10", discount:0},
//       {id:4, buyerId:"buyer@test.com", sellerId:"seller1@test,com", transferId:7, itemId:2, itemName:"zzz", tax:0.2, itemNumbers:1, itemPrice: 8000, dateTime:"2020-05-18", discount:0}
//   ]

  domain = 'http://localhost:8083/transaction/'

  getPurchaseHistoryByBuyerId(buyerId:number){
    // get from backend.
    // let pruchaseList:any[]= [];
    // this.purchaseSampleData.forEach(item=>{
    //     if(item.buyerId === buyerid){
    //         pruchaseList.push(item);
    //     }
    // })
    // return pruchaseList;
    let reqUrl = this.domain + 'purchasehistory/buyer/' + buyerId;
    return this.httpClient.get(reqUrl);
  }

  getPurchaseListBySellerId(sellerid:number){
    //   let purchaseList:any[] = [];
    //   this.purchaseSampleData.forEach(pur=>{
    //       if(pur.sellerId === sellerid){
    //         purchaseList.push(pur)
    //       }
    //   });
    //   return purchaseList;
    let reqUrl = this.domain + 'purchasehistory/seller/' + sellerid;
    return this.httpClient.get(reqUrl);
  }

  addTransaction(transaction : any){
      let reqUrl = this.domain + 'action';
    //   let reqUrlpruchase = 'purchasehistory';
      return this.httpClient.post(reqUrl, transaction, this.httpOptions);
  }

  addPurchase(purchase : any){
      let reqUrl = this.domain + 'purchasehistory';
      return this.httpClient.post(reqUrl, purchase, this.httpOptions);
  }

//   addTransactionPurchase(transaction:any[], purchase:any[]){
//       let reqUrl = this.domain + 'both';
//       return this.httpClient.post(reqUrl,)
//   }

  addTransactionList(transactionList : any[]){
      let reqUrl = this.domain + 'action/list';
      return this.httpClient.post(reqUrl, transactionList, this.httpOptions);
  }

  addPurchaseHistoryList(purchaseHistoryList : any[]){
      let reqUrl = this.domain + 'purchasehistory/list'
      return this.httpClient.post(reqUrl, purchaseHistoryList, this.httpOptions);
  }

  

}
