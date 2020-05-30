import { Component, OnInit } from '@angular/core';

import { PurchaseService } from '../../services/purchase.service';

import { Alert } from '../../interfaces/alert';

const ALERTS: Alert[] = [];
@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  alerts: Alert[];

  constructor(private purchaseService:PurchaseService) { }

  ngOnInit(): void {
    this.purchaseService.getPurchaseHistoryByBuyerId(parseInt(localStorage.getItem("buyerId"))).subscribe((purchaseHistory:any[]) => {
        this.purchaseList = purchaseHistory
    } ,(error) => {
        this.reset();
        if (error.status === 401){
            // this.alerts.push({type : 'danger', message:"Not logon or token expired, please log on"});
            if(localStorage.getItem("token")){
                this.alerts.push({type : 'danger', message:"logon expired, please log on again."});
                localStorage.clear();
            } else {
                this.alerts.push({type : 'danger', message:"Please log on first."});
            }
        } else {
            this.alerts.push({type : 'danger', message:"System error " + error.status + ". Please try again later."});
        }
    });
  }
  purchaseList:any[];

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
