import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      console.log(this.images);
  }
  images = ["discount1.jpg","discount2.jpg","discount3.jpg"].map((n) => `../../../assets/discount/${n}`);

}
