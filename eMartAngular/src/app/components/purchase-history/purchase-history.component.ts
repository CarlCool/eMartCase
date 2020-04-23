import { Component, OnInit } from '@angular/core';

import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  constructor(private purchaseService:PurchaseService) { }

  ngOnInit(): void {
    this.purchaseList = this.purchaseService.getPurchaseHistoryByBuyerId("Tester");
  }
  purchaseList:any[];

}
