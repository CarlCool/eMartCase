import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getDisplayItems(this.items, this.page, this.pageSize);
    
  }

  ngOnChanges(): void{
    this.getDisplayItems(this.items, this.page, this.pageSize);
  }

  ngDoCheck(): void{
    if (this.oldPage != this.page){
        this.getDisplayItems(this.items, this.page, this.pageSize);
    }
  }

  @Input() items:any;

  page:number = 1;

  oldPage:number = 1;

  pageSize:number = 8;

  collectionSize:number;

  itemDisplayList:any[];

  getDisplayItems(itemList:any[], page:number, itemsPerPage:number){
    this.itemDisplayList = itemList.slice((page - 1)*itemsPerPage,page*itemsPerPage);
    this.oldPage = page;
  }

}
