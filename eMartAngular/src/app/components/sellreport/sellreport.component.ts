import { Component, OnInit } from '@angular/core';

import { PurchaseService } from '../../services/purchase.service';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { Alert } from '../../interfaces/alert'

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-sellreport',
  templateUrl: './sellreport.component.html',
  styleUrls: ['./sellreport.component.css']
})
export class SellreportComponent implements OnInit {

  constructor(private purchaseService:PurchaseService ) { }

  ngOnInit(): void {
      this.purchaseService.getPurchaseListBySellerId(parseInt(localStorage.getItem("sellerId"))).subscribe((purchase: any[]) => {
          this.purchaseListBySellerId = purchase;
          this.sellReportList = this.getReportData(this.purchaseListBySellerId);
      } ,(error) => {
        if (error.status === 401){
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
    //   this.sellReportList = this.getReportData(this.purchaseListBySellerId);
  }

  sellReportList:any[] = [];
  purchaseListBySellerId:any[] = [];
  alerts: Alert[];

  getReportData(purchaseList:any[]){
    let reportList:any[] = [];
    let reportdata:any;
    for(let i  = 0; i < purchaseList.length; i++){
        let oldData = purchaseList[i];
        if(!reportdata){
            reportdata = oldData;
        }else{
            if(reportdata.itemId === oldData.itemId && reportdata.itemPrice === oldData.itemPrice){
                reportdata.itemNumbers += oldData.itemNumbers;
            }else{
                reportList.push(reportdata);
                reportdata = oldData;
            }
            
        }
        if(i === purchaseList.length - 1){
            reportList.push(reportdata);
        }

    }
    return reportList;
    
  }

  startDate:NgbDateStruct;
  endDate:NgbDateStruct;
  onSubmit(){
    let listbyDate:any[] = [];
    if(this.startDate && this.endDate){
        this.purchaseListBySellerId.forEach(item => {
            if (new Date(item.dateTime) >= new Date(this.startDate.year,this.startDate.month - 1,this.startDate.day) && 
            new Date(item.dateTime) <= new Date(this.endDate.year,this.endDate.month - 1,this.endDate.day + 1)){
                listbyDate.push(item);
                //.replace(/-/g, "/")
            }
        });
        this.sellReportList = this.getReportData(listbyDate);
    }
    
    
    
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }


}
