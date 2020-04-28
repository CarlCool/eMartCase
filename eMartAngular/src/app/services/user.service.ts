import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // sample data
  userList:any[] = [
      {name:"Tester", passWord:"Tester", role:"buyer"},
      {name:"buyer", passWord:"buyer1", role:"buyer"},
      {name:"seller", passWord:"seller", role:"seller"}
  ]

  checkUser(userName:string,password:string,role:string):any{
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
        if(userName === this.userList[i].name && password === this.userList[i].passWord && role === this.userList[i].role){
            console.log("right");
            return {token:"token", name:this.userList[i].name, role:this.userList[i].role};
        }
    }
    console.log("error");
    return {error:"logon faile"}
  }

}
