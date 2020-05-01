import { Component, OnInit } from '@angular/core';

import { PurchaseService } from '../../services/purchase.service';
// import { ItemDetailComponent } from '../item-detail/item-detail.component';

@Component({
  selector: 'app-sellreport',
  templateUrl: './sellreport.component.html',
  styleUrls: ['./sellreport.component.css']
})
export class SellreportComponent implements OnInit {

  constructor(private purchaseService:PurchaseService ) { }

  ngOnInit(): void {
      this.sellReportList = this.getReportData();
  }

  sellReportList:any[] = [];

  getReportData(){
    let purchaseList = this.purchaseService.getPurchaseListBySellerId(localStorage.getItem('email'));
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
            if(i === purchaseList.length - 1){
                reportList.push(reportdata);
            }
        }

    }
    return reportList;
    
  }



}
