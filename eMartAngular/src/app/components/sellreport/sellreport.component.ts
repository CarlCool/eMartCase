import { Component, OnInit } from '@angular/core';

import { PurchaseService } from '../../services/purchase.service';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sellreport',
  templateUrl: './sellreport.component.html',
  styleUrls: ['./sellreport.component.css']
})
export class SellreportComponent implements OnInit {

  constructor(private purchaseService:PurchaseService ) { }

  ngOnInit(): void {
      this.purchaseListById = this.purchaseService.getPurchaseListBySellerId(localStorage.getItem('email'));
      this.sellReportList = this.getReportData(this.purchaseListById);
  }

  sellReportList:any[] = [];
  purchaseListById:any[] = [];

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
    // console.log(this.startDate);
    // console.log(this.endDate);
    if(this.startDate && this.endDate){
        this.purchaseService.purchaseSampleData.forEach(item => {
            if (new Date(item.dateTime) >= new Date(this.startDate.year,this.startDate.month - 1,this.startDate.day) && 
            new Date(item.dateTime) <= new Date(this.endDate.year,this.endDate.month - 1,this.endDate.day)){
                console.log(item);
                listbyDate.push(item);
                //.replace(/-/g, "/")
            }
        });
        console.log(listbyDate);
        this.sellReportList = this.getReportData(listbyDate);
    }
    
    
    
  }


}
