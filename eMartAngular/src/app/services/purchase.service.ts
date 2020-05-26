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


//   domain = 'http://localhost:8083/transaction/'
  private domain = 'http://localhost:8085/emart-transaction/transaction/';

  getPurchaseHistoryByBuyerId(buyerId:number){
    // get from backend.
    let reqUrl = this.domain + 'purchasehistory/buyer/' + buyerId;
    return this.httpClient.get(reqUrl);
  }

  getPurchaseListBySellerId(sellerid:number){
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
