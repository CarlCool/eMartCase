import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // sample data
  userList:any[] = [
      {name:"Tester", password:"Tester", role:"buyer", email:"tester@test.com",buyerId:1},
      {name:"buyer", password:"buyer1", role:"buyer", email:"ccc@test.com", buyerId:2},
      {name:"seller", password:"seller", role:"seller", email:"seller@test.com", sellerId:1}
  ]

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

  addUser(value:any){
    for(let i = 0 ; i < this.userList.length ; i++){
        if(value.email === this.userList[i].email && value.role === this.userList[i].role){
            return {error:"email existed!"};
        }
    }
    this.userList.push(value);
    return{successful:"User created"};
  }

}
