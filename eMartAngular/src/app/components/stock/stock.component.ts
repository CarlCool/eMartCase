import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.itemService.getItemViewByOwner(Number(localStorage.getItem("sellerId"))).subscribe((data:any) => {
        this.itemListByOwner = data;
    });
  }

  itemListByOwner:any[];
  result:any;

  deleteItem(itemId){
    // alert(itemId);
    this.itemService.deleteItem(itemId).subscribe((result) => {
    //   console.log(result);
      this.ngOnInit();
    });
    
  }
    
  editItem(itemId){
    //routing to edit
    this.router.navigate(["/edititem",itemId]);
  }

}
