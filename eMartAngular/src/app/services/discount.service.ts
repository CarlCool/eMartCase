import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  httpOptions = {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
      headers: new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json', 'Authorization':"Bearer " + localStorage.getItem('token'),'role':localStorage.getItem('role')})
  };
  constructor(private httpClient : HttpClient) { }
  //sample data
  discountList = [
      {id:1,discountCode:"aax1", percentage:0.3, startDate:"2020-08-08", endDate:"2020-08-11", description: "Discount Day!!", picture: "discount1.jpg"},
      {id:2,discountCode:"aax2", percentage:0.2, startDate:"2020-09-08", endDate:"2020-09-11", description: "One year!!", picture: "discount2.jpg"},
      {id:3,discountCode:"aax3", percentage:0.5, startDate:"2020-12-31", endDate:"2021-01-01", description: "Happy New Year!!", picture:"discount3.jpg"}
  ]
  domain : String = 'http://localhost:8085/emart-transaction/transaction/discount'
  getDiscountList(){
    let reqUrl = this.domain + '/allavailable'
    return this.httpClient.get(reqUrl,this.httpOptions);
     // get data from backend
  }

  getDiscountByDiscountCode(discountCode: number){
      let reqUrl = this.domain + '/' + discountCode;
      return this.httpClient.get(reqUrl, this.httpOptions);
  }

}
