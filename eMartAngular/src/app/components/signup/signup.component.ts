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

    role: string = 'buyer';
    password: string;
    alerts: Alert[];

    onSubmit(value: any) {
        if (this.validInput(value)) {
            //   buyer regester
            if (value.role === 'buyer') {
                this.userService.getBuyerByEmail(value.eMail).subscribe((findBuyer: any) => {
                    if (findBuyer.messageCode !== 0) {
                        this.alerts.push({ type: 'danger', message: "Email existed" });
                    } else {
                        let buyer: any = {};
                        buyer.userName = value.name;
                        buyer.emailId = value.eMail;
                        buyer.password = value.password;
                        buyer.mobileNumber = value.mobile;
                        this.userService.addBuyer(buyer).subscribe((result: any) => {
                            if (result.messageCode === 2) {
                                this.router.navigate(["/logon"]);
                            } else {
                                this.alerts.push({ type: 'danger', message: "Fail to create user" });
                            }
                        });
                    }
                }, (error) => {
                    this.alerts.push({type : 'danger', message:"System error " + error.status + ". Please try again later."});
                });
                // ,
                // error => {
                //     if(error.status === 401){
                //         this.alerts.push({ type: 'danger', message: "Not log on" });
                //     }
                // });
                
            } else {
                // seller register.
                this.userService.getSellerByEmail(value.eMail).subscribe((findSeller:any) => {
                    if (findSeller.messageCode !==0) {
                        this.alerts.push({ type: 'danger', message: "Email existed" });
                    } else {
                        let seller: any = {};
                        seller.userName = value.name;
                        seller.emailId = value.eMail;
                        seller.password = value.password;
                        seller.connectNumber = value.connectNubmer;
                        seller.companyName = value.company;
                        seller.gstin = value.gstin;
                        seller.companyBrief = value.companyBrief;
                        seller.postalAddress = value.postalAddress;
                        seller.website = value.website;
                        seller.bankNumber = value.bankNumber;
                        this.userService.addSeller(seller).subscribe((result:any) => {
                            if (result.messageCode === 2) {
                                this.router.navigate(["/logon"]);
                            } else {
                                this.alerts.push({ type: 'danger', message: "Fail to create user" });
                            }
                        });
                    }
                }, (error) => {
                    this.alerts.push({type : 'danger', message:"System error " + error.status + ". Please try again later."});
                });
                
            }

        }
    }

    validInput(value: any) {
        this.reset();
        let result = true;

        if (!value.eMail) {
            this.alerts.push({ type: 'danger', message: 'eMail ID required!' });
            result = false;
        }

        if (!value.name) {
            this.alerts.push({ type: 'danger', message: 'Name required!' });
        }

        if (!value.password) {
            this.alerts.push({ type: 'danger', message: 'password required!' });
            result = false;
        }

        if (value.password !== value.confpassword) {
            this.alerts.push({ type: 'danger', message: 'password and confrime password not same!' });
            result = false;
        }

        if (value.password.length < 6) {
            this.alerts.push({ type: 'danger', message: 'password length must be greater than 6!' });
            result = false;
        }

        if (value.role === 'buyer') {
            if (!value.mobile) {
                this.alerts.push({ type: 'danger', message: 'Mobile number required!' });
                result = false;
            }
        } else {
            if (!value.connectNubmer) {
                this.alerts.push({ type: 'danger', message: 'Conncet number required!' });
                result = false;
            }
            if (!value.bankNumber) {
                this.alerts.push({ type: 'danger', message: 'Bank number required!' });
                result = false;
            } else{
                if(value.bankNumber.length !== 16){
                    this.alerts.push({ type: 'danger', message: 'Bank number must 16 digits!' });
                    result = false;
                }
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
