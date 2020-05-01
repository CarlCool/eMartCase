import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../../services/item.service';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private itemService:ItemService, private cartService:CartService) {  }

  ngOnInit(): void {
      this.route.params.subscribe((itemId) => {
        // this.itemId = itemId.id;
        this.itemDetail = this.itemService.getItemById(Number(itemId.id));
        
      })
  }

  public itemNumbers:number = 1;

  public itemDetail:any;

}
