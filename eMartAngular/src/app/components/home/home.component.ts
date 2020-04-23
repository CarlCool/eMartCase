import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public item:ItemService) { }

  ngOnInit(): void {
      this.categoryList = this.item.getCategoryList();
      this.itemList = this.item.getItemList();
    //   console.log(this.itemList);
  }

  categoryList:any[] = [];
  itemList:any[] = [];
  public getItemListByCate(cate : String){
      this.itemList = this.item.getItemListByCate(cate);
  }

  public getAllItem(){
      this.itemList = this.item.getItemList();
  }
//   public transfer = "aaaaa";
  
//   active = 1;

}
