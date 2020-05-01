import { Component, OnInit } from '@angular/core';

import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor(private discountService:DiscountService) { }

  ngOnInit(): void {
    this.discountList = this.discountService.discountList;
  }

  discountList:any[];

//   images = ["discount1.jpg","discount2.jpg","discount3.jpg"].map((n) => `../../../assets/discount/${n}`);

}
