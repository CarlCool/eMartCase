import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  allItemList = [
    {itemId:1, itemName: "xxliv", itemCategory: "Electronic",itemSubcategory:"Computer", price: 5000.00, picture:"livx.jpg",discription:"cpu:core i5, ram 8GB",GST:0.1},
    {itemId:2, itemName: "iPhone", itemCategory: "Electronic",itemSubcategory:"Phone", price: 8000.00, picture:"iPhone.jpg",discription:"",GST:0.15},
    {itemId:3, itemName: "Play Station 3", itemCategory: "Electronic",itemSubcategory:"Game", price: 2000.00, picture:"PS3.jpg",discription:"",GST:0.2},
    {itemId:4, itemName: "Sweater", itemCategory: "DailyUse", itemSubcategory:"Clothes", price: 200.00, picture:"Sweater.jpg",discription:"",GST:0.05},
    {itemId:5, itemName: "Trousers", itemCategory: "DailyUse", itemSubcategory:"Clothes", price: 300.00, picture:"trouther.jpg",discription:"",GST:0.05},
    {itemId:6, itemName: "Fruit", itemCategory: "Food", itemSubcategory:"Fruit", price: 20.5, picture:"mango.jpg",discription:"",GST:0.02},
    {itemId:7, itemName: "Rice", itemCategory: "Food", itemSubcategory:"PrincipalFood", price: 10.00, picture:"rice.jpg",discription:"",GST:0.02},
    {itemId:8, itemName: "Meat", itemCategory: "Food", itemSubcategory:"Meat", price: 50.00, picture:"beef.gif",discription:"",GST:0.03}
  ]

  getItemList(){
      // will request form back
    //   let itemList = 
      return this.allItemList;
  }
  getItemListByCate(category : String){
    //
    let items = [];
    this.allItemList.forEach( item => {
        if(item.itemCategory === category){
            items.push(item);
        }
    })
    return items;
  }
  getItemByName(name : String){
        //
  }

  getItemById(id:number){
      let itemDetail;
      this.allItemList.forEach( item => {
          if(item.itemId === id){
              itemDetail = item;
              return itemDetail;
          }
        //   else {
        //       return "no items";
        //   }
      });
      return itemDetail;
  }

  getCategoryList(){
    //select categoryList from table;  
    let categoryList = [
      { categoryName: "Electronic"},
      { categoryName: "Food"},
      { categoryName: "DailyUse"},
      { categoryName: "Others"},
    ];
    return categoryList;
  }
}
