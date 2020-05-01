import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemListByOwner = this.itemService.getItemByOwner(localStorage.getItem("email"));
  }

  itemListByOwner:any[];
  result:any;

}
