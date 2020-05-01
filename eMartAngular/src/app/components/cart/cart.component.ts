import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    
  constructor(private cartService:CartService, private itemService: ItemService) { }

  ngOnInit(): void {
      this.cartList=this.cartService.getCartItembyUserId("Tester");
    //   this.itemList = this.itemService.getItemById();
    if(this.cartList){
        let items:any
        this.cartList.forEach(item => {
            items = this.itemService.getItemById(item.itemId);
            item.itemName = items.itemName;
            item.price = items.price;
            item.GST = items.GST;
        });

    }
  }
  public cartList:any[] = [];
  public itemList:any[] = [];
  public master:boolean = false;

  selectAll(){
    this.master = !this.master;
    this.cartList.forEach(item=>{
          item.checked = this.master;
      });
    this.totalCal();
  }

  // display in the bottom of cart page
  public total:any = {tax : 0, price : 0, discount : 0, cost : 0};
  totalCal():void{
    //   let total:any = {};
      let totalTax:number = 0;
      let totalPrice:number = 0;
      let totalCost:number = 0;
      let discount:number = 0;
      this.cartList.forEach(item=>{
          if(item.checked){
            totalTax = (totalTax + (item.price * item.GST))*item.itemNumbers;
            totalPrice = (totalPrice + item.price)*item.itemNumbers;
          }
      })
      totalCost = (totalPrice + totalTax)*(1 - discount);
      this.total.tax = totalTax;
      this.total.price = totalPrice;
      this.total.discount = discount;
      this.total.cost = totalCost;
  }

  getDiscunt(){

  }

//   totalPirce():number{
//       let totalPrice:number = 0;
//       this.
//   }


}
