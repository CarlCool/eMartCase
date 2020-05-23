import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
    headers: new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json'})
};

private domain = 'http://localhost:8082/item/';

  constructor(private httpClient: HttpClient) { }


//   allItemList : any;
//   = [
//     {itemId:1, itemName: "ThinkPad", itemCategory: "Electronic",itemSubcategory:"Computer", price: 5000.00, picture:"livx.jpg",discription:"cpu:core i5, ram 8GB",GST:0.1, stockNumbers:100, owner:"seller@test.com"},
//     {itemId:2, itemName: "iPhone", itemCategory: "Electronic",itemSubcategory:"Phone", price: 8000.00, picture:"iPhone.jpg",discription:"",GST:0.15, stockNumbers:500, owner:"seller@test.com"},
//     {itemId:3, itemName: "Play Station 3", itemCategory: "Electronic",itemSubcategory:"Game", price: 2000.00, picture:"PS3.jpg",discription:"",GST:0.2, stockNumbers:100, owner:"seller@test.com"},
//     {itemId:4, itemName: "Sweater", itemCategory: "DailyUse", itemSubcategory:"Clothes", price: 200.00, picture:"Sweater.jpg",discription:"",GST:0.05, stockNumbers:100, owner:"seller@test.com"},
//     {itemId:5, itemName: "Trousers", itemCategory: "DailyUse", itemSubcategory:"Clothes", price: 300.00, picture:"trouther.jpg",discription:"",GST:0.05, stockNumbers:100, owner:"seller@test.com"},
//     {itemId:6, itemName: "Fruit", itemCategory: "Food", itemSubcategory:"Fruit", price: 20.5, picture:"mango.jpg",discription:"",GST:0.02, stockNumbers:100, owner:"seller1@test.com"},
//     {itemId:7, itemName: "Rice", itemCategory: "Food", itemSubcategory:"PrincipalFood", price: 10.00, picture:"rice.jpg",discription:"",GST:0.02, stockNumbers:1000, owner:"seller1@test.com"},
//     {itemId:8, itemName: "Meat", itemCategory: "Food", itemSubcategory:"Meat", price: 50.00, picture:"beef.gif",discription:"",GST:0.03, stockNumbers:100, owner:"seller1@test.com"}
//   ]

//   subCategoryBycate:any;
  //Get all item list;
  getItemViewList(){
    //   return this.allItemList;
    let reqUrl = this.domain + 'details';
      return this.httpClient.get(reqUrl);
  }
  getItemViewListByCate(categoryId : number){
    let reqUrl = this.domain + 'list/category/' + categoryId;
    return this.httpClient.get(reqUrl);
  }
//   serachItem(name : string){
//         //
//         let searchList:any = []; 
//         // this.allItemList
//         this.allItemList.forEach(item=>{
//             if(item.itemName.toLowerCase().indexOf(name.toLowerCase())>-1 || 
//             item.itemSubcategory.toLowerCase().indexOf(name.toLowerCase())>-1 ||
//             item.itemCategory.toLowerCase().indexOf(name.toLowerCase())>-1){
//                 searchList.push(item);
//             }
//         });
//         return searchList;
//   }

  getItemViewById(id:number){
    let reqUrl = this.domain + id;
    return this.httpClient.get(reqUrl);
  }

  getItemViewByOwner(sellerId:number){
    //   let itemListByOwner:any[] = [];
    //   this.allItemList.forEach(item=>{
    //       if(item.owner === email){
    //         itemListByOwner.push(item);
    //       }
    //   });
    //   return itemListByOwner;
    let reqUrl = this.domain + 'list/seller/' + sellerId;
    return this.httpClient.get(reqUrl);
  }

  getCategoryList(){
    //select categoryList from table;  
    let reqUrl = this.domain + 'category/all';
    return this.httpClient.get(reqUrl);
  }

  getSubCategoryNameList(){
    //   let subCategory =["Computer","Phone","Game","Clothes","Fruit","PrincipalFood","Meat"];
    let reqUrl = this.domain + 'subcategory/allname';
      return this.httpClient.get(reqUrl);
  }

  getSubCategoryByCateName(categoryName){
    let reqUrl = this.domain + 'subcategory/categoryname/' + categoryName;
    return this.httpClient.get(reqUrl);
  }

  getCategoryByName(categoryName:string){
    let reqUrl = this.domain + 'category/name/' + categoryName;
    return this.httpClient.get(reqUrl);
  }

  getSubCategoryByName(subCategoryName: string){
    let reqUrl = this.domain + 'subcategory/name/' + subCategoryName;
    return this.httpClient.get(reqUrl);
  }

  addItem(item){
    console.log('add call');
    let reqUrl = this.domain + 'details';
    return this.httpClient.post(reqUrl, JSON.stringify(item), this.httpOptions);
    //add item to table
  }

  deleteItem(itemId){
    // delete item
    let reqUrl = this.domain + itemId;
    return this.httpClient.delete(reqUrl);
  }

  updateItem(item){
    let reqUrl = this.domain + 'details';
    return this.httpClient.put(reqUrl, item, this.httpOptions);
  }


}
