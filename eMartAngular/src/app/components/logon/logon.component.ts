import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
// import { from } from 'rxjs';

interface Alert {
    type: string;
    message: string;
  }
  
const ALERTS: Alert[] = [];

// const asyncLocalStorage = {
//   setItem: async function (key,value) {
//     localStorage.setItem(key,value);
//     await null;
//   },getItem: async function (key) {
//     return localStorage.getItem(key);
//     await null;
//   }
// };

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  role = "buyer";
  alerts: Alert[];

  onSubmit(value: any) {
    if (this.validInput(value)) {
        if(value.role === 'buyer'){
            // buyer validation.
            this.userService.buyerValication(value.email, value.password).subscribe((result : any) => {
                if(result.token){
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("emailId", result.emailId);
                    localStorage.setItem("buyerId", result.buyerId);
                    localStorage.setItem("buyerName", result.buyerName);
                    localStorage.setItem("role", result.role);
                    localStorage.setItem("reload","true");
                    this.router.navigate(["/home"]);
                } else {
                    this.alerts.push({type : 'danger', message:"Password or Email Id wrong"});
                }
            }, (error) => {
                this.alerts.push({type : 'danger', message:"System error " + error.status + ". Please try again later."})
            });
        } else {
            // buyer validation.
            this.userService.sellerValication(value.email, value.password).subscribe((result : any) => {
                if(result.token){
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("emailId", result.emailId);
                    localStorage.setItem("sellerId", result.buyerId);
                    localStorage.setItem("sellerName", result.buyerName);
                    localStorage.setItem("role", result.role);
                    localStorage.setItem("reload","true")
                    this.router.navigate(["/stock"]);
                } else {
                    this.alerts.push({type : 'danger', message:"Password or Email Id wrong"});
                }
            }, (error) => {
                this.alerts.push({type : 'danger', message:"System error " + error.status + ". Please try again later."});
            });
        }
        
    //   let user:any; 
    //   user = this.userService.checkUser(value.email,value.password,value.role);
    //   console.log(user.error);
    //   if(!user.error){
    //     localStorage.setItem("token", user.token);
    //     localStorage.setItem("name", user.name);
    //     localStorage.setItem("role", user.role);
    //     localStorage.setItem("email", user.email);
    //     if(user.role === "seller"){
    //         localStorage.setItem("sellerId", user.sellerId);
    //         this.router.navigate(["/stock"])
    //     } else{
    //         localStorage.setItem("buyerId", user.buyerId);
    //         this.router.navigate(["/home"]);
    //     }
    //   }else{
    //     this.alerts.push({type : 'danger', message:user.error});
    //   }
    }
  }
  validInput(value: any): boolean {
    this.reset();
    let result = true
    if (!value.email) {
      this.alerts.push({type : 'danger', message: 'eMail ID required!'});
      result = false;
    }

    if (!value.password) {
      this.alerts.push({type : 'danger', message: 'password required!'});
      result =  false;
    }

    if (value.password.length < 6) {
      this.alerts.push({type : 'danger', message: 'password length must be greater than 6!'});
      result =  false;
    }

    return result;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
}
