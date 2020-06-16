import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from '../../services/item.service';

import { Alert } from '../../interfaces/alert'
const ALERTS: Alert[] = [];
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    // location.reload();
    if(localStorage.getItem("reload")){
        localStorage.removeItem("reload");
        location.reload();
    }
    let sellerId:Number = Number(localStorage.getItem("sellerId"));
    this.getItemListByOwner(sellerId);
    
    // location.reload();
  }

  alerts: Alert[];
  itemListByOwner:any[] = [];
  result:any;
  getItemListByOwner(sellerId: Number){
    this.reset();
    // this.itemService.getItemViewByOwner(Number(localStorage.getItem("sellerId"))).subscribe((data:any) => {
    this.itemService.getItemViewByOwner(sellerId).subscribe((data:any[]) => {
        this.itemListByOwner = data;
    } ,(error) => {
        if (localStorage.getItem("reload")){
            return;
        }
        if (error.status === 401){
            if(localStorage.getItem("token")){
                this.alerts.push({type : 'danger', message:"logon expired, please log on again."});
                localStorage.clear();
            } else {
                this.alerts.push({type : 'danger', message:"Please log on first."});
            }
        } else {
            this.alerts.push({type : 'danger', message:"System error " + error.status + ". Please try again later." + error.message});
        }
    });
    
  }

  deleteItem(itemId){
    // alert(itemId);
    this.itemService.deleteItem(itemId).subscribe((result) => {
      this.ngOnInit();
    });
    
  }
    
  editItem(itemId){
    //routing to edit
    this.router.navigate(["/edititem",itemId]);
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
