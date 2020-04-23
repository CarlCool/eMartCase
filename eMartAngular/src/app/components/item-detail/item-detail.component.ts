import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(public route:ActivatedRoute, public itemService:ItemService) { }

  ngOnInit(): void {
      this.route.params.subscribe((itemId) => {
        console.log(itemId);
        // this.itemId = itemId.id;
        this.itemDetail = this.itemService.getItemById(Number(itemId.id));
        
      })
  }

  public itemDetail:any;

}
