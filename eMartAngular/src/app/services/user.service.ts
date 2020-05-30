import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  // sample data
  userList:any[] = [
      {name:"Tester", password:"Tester", role:"buyer", email:"tester@test.com",buyerId:1},
      {name:"buyer", password:"buyer1", role:"buyer", email:"ccc@test.com", buyerId:2},
      {name:"seller", password:"seller", role:"seller", email:"seller@test.com", sellerId:1}
  ]
  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8' ,Authorization:'Bearer ' + localStorage.getItem('token')})
    headers: new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json'})
  };

//   domain = 'http://localhost:8081/user/'
  private domain = 'http://localhost:8085/emart-user/user/';
  checkUser(email:string,password:string,role:string):any{

    for(let i = 0 ; i < this.userList.length ; i++){
        if(email === this.userList[i].email && password === this.userList[i].password && role === this.userList[i].role){
            if(this.userList[i].role === 'seller'){
                return {token:"token", email: this.userList[i].email , name:this.userList[i].name, role:this.userList[i].role, sellerId:this.userList[i].sellerId};
            }else{
                return {token:"token", email: this.userList[i].email , name:this.userList[i].name, role:this.userList[i].role, buyerId:this.userList[i].buyerId};
            }
            
        }
    }
    return {error:"Passeord or Email wrong"}
  }

  addBuyer(buyer:any){
//     for(let i = 0 ; i < this.userList.length ; i++){
//         if(value.email === this.userList[i].email && value.role === this.userList[i].role){
//             return {error:"email existed!"};
//         }
//     }
//     this.userList.push(value);
//     return{successful:"User created"};
    let reqUrl = this.domain + 'buyer';
    return this.httpClient.post(reqUrl, buyer, this.httpOptions);
  }

  addSeller(seller:any){
      let reqUrl = this.domain + 'seller';
      return this.httpClient.post(reqUrl, seller, this.httpOptions);
  }

  // check if email id existed for buyer
  getBuyerByEmail(email:string){
      let reqUrl = this.domain + 'buyer/email/' + email;
      return this.httpClient.get(reqUrl,this.httpOptions);
  }

  // check if email id existed for seller
  getSellerByEmail(email: string){
      let reqUrl = this.domain + 'seller/email/' + email;
      return this.httpClient.get(reqUrl, this.httpOptions);
  }

  //validation buyer with emailid and password;
  buyerValication(emailId: String, password: String){
      let buyerForValication : any = {};
      buyerForValication.emailId = emailId;
      buyerForValication.password = password;
      let reqUrl = this.domain + 'buyer/validation';
      return this.httpClient.post(reqUrl,buyerForValication,this.httpOptions);
  }

  //validation seller with emailid and password;
  sellerValication(emailId: String, password: String){
    let sellerForValication : any = {};
    sellerForValication.emailId = emailId;
    sellerForValication.password = password;
    let reqUrl = this.domain + 'seller/validation';
    return this.httpClient.post(reqUrl,sellerForValication,this.httpOptions);
}

}
