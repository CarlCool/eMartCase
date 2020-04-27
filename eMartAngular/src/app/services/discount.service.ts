import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() { }
  //sample data
  discountList = [
      {id:1,discountCode:"aax1", percentage:0.3, startDate:"2020-08-08", endDate:"2020-08-11", description: "Discount Day!!", picture: "discount1.jpg"},
      {id:2,discountCode:"aax2", percentage:0.2, startDate:"2020-09-08", endDate:"2020-09-11", description: "One year!!", picture: "discount2.jpg"},
      {id:3,discountCode:"aax3", percentage:0.5, startDate:"2020-12-31", endDate:"2021-01-01", description: "Happy New Year!!", picture:"discount3.jpg"}
  ]
  getDiscountList(){

     // get data from backend
  }
}
