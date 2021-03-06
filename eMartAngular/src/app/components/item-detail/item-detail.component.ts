import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../../services/item.service';

import { CartService } from '../../services/cart.service';

interface Alert {
    type: string;
    message: string;
  }
  
  const ALERTS: Alert[] = [];
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private itemService:ItemService, private cartService:CartService, private router: Router) {  }

  ngOnInit(): void {
      //get itemId from itemlist
      this.route.params.subscribe((itemId) => {
        // this.itemId = itemId.id;
        // this.itemDetail = this.itemService.getItemById(Number(itemId.id));
        this.itemService.getItemViewById(itemId.id).subscribe((data:any) => {
            this.itemDetail = data;
        } ,(error) => {
            if (error.status === 401){
                if(localStorage.getItem("token")){
                    this.alerts.push({type : 'danger', message:"logon expired, please log on again."});
                    localStorage.clear();
                } else {
                    this.alerts.push({type : 'danger', message:"Please log on first."});
                }
            } else {
                this.alerts.push({type : 'danger', message:"System error " + error.status + ". Please try again later."});
            }
        });
        
      });
  }

//   private url = 'http://localhost:8082/item';

  public itemNumbers:number = 1;

  public itemDetail:any;

  alerts: Alert[];

  // Add item to Cart.
  addToCart(){
    if(this.validInput()){
        let cart: any = {};
        cart.itemId = this.itemDetail.itemEntity.itemId;
        cart.itemNumbers = this.itemNumbers;
        cart.buyerId = parseInt(localStorage.getItem("buyerId"));
        if(cart.buyerId){
        // Add cart to DB.
            this.cartService.addItemtoCart(cart).subscribe((result) => {
                if(result){
                    this.alerts.push({type : 'success', message: 'Added to Cart.'});
                }
            } ,(error) => {
                if (error.status === 401){
                    if(localStorage.getItem("token")){
                        this.alerts.push({type : 'danger', message:"logon expired, please log on again."});
                        localStorage.clear();
                    } else {
                        this.alerts.push({type : 'danger', message:"Please log on first."});
                    }
                } else {
                    this.alerts.push({type : 'danger', message:"System error " + error.status + ". Please try again later."});
                }
            });
        } else{
            this.alerts.push({type : 'danger', message: 'Please log on.'});
        }
    }
  }

  validInput(): boolean {
    this.reset();
    let result = true;
    if (this.itemNumbers <= 0){
      this.alerts.push({type : 'danger', message: 'item numbers can not < 0'});
      result = false;
    }

    if(this.itemNumbers > this.itemDetail.itemEntity.itemStoce){
      this.alerts.push({type : 'danger', message: 'There is not enough items in stock'});
      result = false;
    }

    return result;
  }

  checkOut(){
    if(this.validInput()){
        this.cartService.selectedItemInCart = [];
        let cart: any = {};
        let cartEntity: any = {};
        let itemEntity: any = {}; 
        let subCategoryEntity: any = {};
        cartEntity.itemId = this.itemDetail.itemEntity.itemId;
        cartEntity.itemNumbers = this.itemNumbers;
        cartEntity.buyerId = parseInt(localStorage.getItem("buyerId"));
        itemEntity = this.itemDetail.itemEntity;
        subCategoryEntity = this.itemDetail.subCategoryEntity;
        cart.cartEntity = cartEntity;
        cart.itemEntity = itemEntity;
        cart.subCategoryEntity = subCategoryEntity;
        this.cartService.totalIformation.tax = this.itemDetail.itemEntity.itemPrice * this.itemDetail.subCategoryEntity.subcategoryGst * this.itemNumbers;
        this.cartService.totalIformation.price = this.itemDetail.itemEntity.itemPrice * this.itemNumbers;
        this.cartService.totalIformation.discount = 0;
        this.cartService.totalIformation.cost = this.cartService.totalIformation.tax + this.cartService.totalIformation.price;
        this.cartService.selectedItemInCart.push(cart);
        this.router.navigate(["/transaction"]);    
    }
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
}
