import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
    headers: new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json'})
};

// private domain = 'http://localhost:8082/item/';
private domain = 'http://localhost:8085/emart-item/item/';

  constructor(private httpClient: HttpClient) { }


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


  getItemViewById(id:number){
    let reqUrl = this.domain + id;
    return this.httpClient.get(reqUrl);
  }

  getItemViewByOwner(sellerId:number){

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
