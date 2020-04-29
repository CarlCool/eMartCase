import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // sample data
  userList:any[] = [
      {name:"Tester", password:"Tester", role:"buyer", email:"tester@ttt.com"},
      {name:"buyer", password:"buyer1", role:"buyer", email:"ccc@test.com"},
      {name:"seller", password:"seller", role:"seller", email:"cdf@test.com"}
  ]

  checkUser(email:string,password:string,role:string):any{
      console.log("call user service");
    // this.userList.forEach(user=>{
    //     console.log(user.name);
    //     console.log(user.passWord);
    //     console.log(user.role);
    //     if(userName === user.name && password === user.passWord && role === user.role){
    //         console.log("right");
    //         return {token:"token", name:user.name, role:user.role};
    //     }
    // });
    for(let i = 0 ; i < this.userList.length ; i++){
        if(email === this.userList[i].email && password === this.userList[i].password && role === this.userList[i].role){
            return {token:"token", name:this.userList[i].name, role:this.userList[i].role};
        }
    }
    return {error:"logon faile"}
  }

  addUser(value:any){
    for(let i = 0 ; i < this.userList.length ; i++){
        if(value.email === this.userList[i].email && value.role === this.userList[i].role){
            return {error:"email existed!"};
        }
    }
    this.userList.push(value);
    console.log(value);
    return{successful:"User created"};
  }

}
