import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

interface Alert {
    type: string;
    message: string;
}
  
const ALERTS: Alert[] = [];

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
      this.categoryList = this.itemService.getCategoryList();
  }
  alerts: Alert[];

  categoryList:any[];

  subCategoryListByCate:any[];

  getSubCategoryByCate(categeryName){
      this.subCategoryListByCate = this.itemService.getSubCategoryByCate(categeryName);
  }

  onSubmit(value: any) {
    if (this.validInput(value)) {
      this.itemService.addItem(value);
    }
  }

  validInput(value: any){
    this.reset();
    let result = true;
    if (!value.category){
        this.alerts.push({type: 'danger', message: 'category required!'})
        result = false;
    }

    if (!value.subCategory){
        this.alerts.push({type: 'danger', message: 'subcategory required!'})
        result = false;
    }

    if (!value.itemPrice){
        this.alerts.push({type: 'danger', message: 'item price required!'})
        result = false;
    } else{
        if (value.itemPrice <= 0){
            this.alerts.push({type: 'danger', message: 'item price should more then 0!'})
            result = false;
        }
    }
    

    if (!value.stockNumber){
        this.alerts.push({type: 'danger', message: 'stock number required!'})
        result = false;
    } else{
        if (value.stockNumber < 0){
            this.alerts.push({type: 'danger', message: 'stock number should more then 0!'})
            result = false;
        }
    }

    if (!value.category){
        this.alerts.push({type: 'danger', message: 'category required!'})
        result = false;
    }

    return result;
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
