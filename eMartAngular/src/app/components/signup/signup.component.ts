import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

interface Alert {
    type: string;
    message: string;
}
  
const ALERTS: Alert[] = [];

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  role:string = 'buyer';
  password:string;
  alerts: Alert[];

  onSubmit(value: any) {
    if (this.validInput(value)) {
      console.log("validate ok");
      console.log(value);
      let user:any; 
      user = this.userService.addUser(value);
      console.log("user is " + JSON.stringify(user));
      if(!user.error){
        this.alerts.push({type: 'success', message:user.successful});
        this.router.navigate(["/logon"]);
      }else{
        this.alerts.push({type : 'danger', message:user.error});
      }
    }
  }

  validInput(value: any){
    this.reset();
    let result = true;
    // if (!value.email) {
    //     this.alerts.push({type : 'danger', message: 'eMail ID required!'});
    //     result = false;
    // }
    if(!value.eMail){
        this.alerts.push({type : 'danger', message: 'eMail ID required!'});
        result =  false;
    }

    if(!value.name){
        this.alerts.push({type : 'danger', message: 'Name required!'});
    }

    if (!value.password) {
        this.alerts.push({type : 'danger', message: 'password required!'});
        result =  false;
    }

    if(value.password !== value.confpassword) {
        this.alerts.push({type : 'danger', message: 'password and confrime password not same!'});
        result =  false;
    }

    if (value.password.length < 6) {
        this.alerts.push({type : 'danger', message: 'password length must be greater than 6!'});
        result =  false;
    }

    if (value.role === 'buyer'){
        if(!value.mobile){
            this.alerts.push({type : 'danger', message: 'Mobile number required!'});
            result = false;
        }
    }else{
        if(!value.connectNubmer){
            this.alerts.push({type : 'danger', message: 'Conncet number required!'});
            result = false;
        }
        if(!value.bankNumber){
            this.alerts.push({type : 'danger', message: 'Bank number required!'});
            result = false;
        }
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
