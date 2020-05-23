import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ItemService } from '../../services/item.service';


interface Alert {
    type: string;
    message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.params['itemid'];
    this.itemService.getItemViewById(this.itemId).subscribe((item:any) => {
      this.itemView = item;
      this.getSubCategoryByCateName(item.categoryEntity.categoryName);
    });
    this.itemService.getCategoryList().subscribe((category:any) => {
      this.categoryList = category;
    });
  }

  alerts: Alert[];
  public itemId: number;
  public itemView: any;
  public categoryList: any[];
  public subCategoryListByCateName: any[];

  getSubCategoryByCateName(categoryName){
    // this.itemView.subcategoryName = '';
    // console.log('call subcategory');
    this.itemService.getSubCategoryByCateName(categoryName).subscribe((subCategory: any) => {
      this.subCategoryListByCateName = subCategory;
    });
  }

  onSubmit(value){
    if (this.validInput(value)) {
        this.updateItem(value);
    }
  }

  updateItem(item){
    this.itemService.getCategoryByName(item.category).subscribe((category : any) => {
      this.itemService.getSubCategoryByName(item.subCategory).subscribe((subCategory : any) => {
        console.log('here');
        let itemEntity:any = {};
        itemEntity.itemId = this.itemId;
        itemEntity.itemName = item.itemName;
        itemEntity.itemImage = 'https://xxxxx.xxxxxx';
        itemEntity.itemPrice = item.itemPrice;
        itemEntity.itemStock = item.itemStock;
        itemEntity.itemDescription = item.itemDescription;
        itemEntity.categoryId = category.categoryId;
        itemEntity.subcategoryId = subCategory.subcategoryId;
        itemEntity.itemRemarks = item.itemRemark;
        itemEntity.sellerId = parseInt(localStorage.getItem("sellerId"));
        console.log('itemEntity:');
        console.log(itemEntity);
        this.itemService.updateItem(itemEntity).subscribe((item: any) => {
          console.log(item);
          this.router.navigate(["/stock"]);
        })
      });
    });
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
    

    if (!value.itemStock){
        this.alerts.push({type: 'danger', message: 'stock number required!'})
        result = false;
    } else{
        if (value.itemStock < 0){
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
