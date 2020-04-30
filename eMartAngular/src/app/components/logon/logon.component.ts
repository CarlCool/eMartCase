import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
// import { from } from 'rxjs';

interface Alert {
    type: string;
    message: string;
  }
  
  const ALERTS: Alert[] = [];

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
      console.log("validate ok");
      console.log(value);
      let user:any; 
      user = this.userService.checkUser(value.email,value.password,value.role);
      console.log(user);
      if(!user.error){
        localStorage.setItem("token", user.token);
        localStorage.setItem("name", user.name);
        localStorage.setItem("role", user.role);
        localStorage.setItem("email", user.email);
        this.router.navigate(["/home"]);
      }else{
        this.alerts.push({type : 'danger', message:user.error});
      }
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
