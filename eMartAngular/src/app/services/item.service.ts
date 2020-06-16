import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
    headers: new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json', 'Authorization':'Bearer ' + localStorage.getItem('token'),'role':localStorage.getItem('role')})
};

// private domain = 'http://localhost:8082/item/';
private domain = 'http://localhost:8085/emart-item/item/';

  constructor(private httpClient: HttpClient) { }


  //Get all item list;
  getItemViewList(){
    //   return this.allItemList;
    let reqUrl = this.domain + 'details/all';
      return this.httpClient.get(reqUrl);
  }
  getItemViewListByCate(categoryId : number){
    let reqUrl = this.domain + 'list/category/' + categoryId;
    return this.httpClient.get(reqUrl,this.httpOptions);
  }


  getItemViewById(id:number){
    let reqUrl = this.domain + id;
    return this.httpClient.get(reqUrl,this.httpOptions);
  }

  getItemViewByOwner(sellerId:Number){
    // this.httpOptions.headers.set("Authorization", "Bearer " + localStorage.getItem('token'));
    // console.log("seller ID is " + sellerIdx`
    let reqUrl = this.domain + 'list/seller/' + sellerId;
    // this.httpOptions.headers.set("Authorization", "Bearer " + localStorage.getItem('token'));
    // this.httpOptions.headers.append("Authorization", "Bearer " + localStorage.getItem('token'));
    // this.httpOptions.headers.set("role",localStorage.getItem('role'));
    // let aut = this.httpOptions.headers.get("Authorization");
    // console.log(aut);
    return this.httpClient.get(reqUrl,this.httpOptions);
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
    return this.httpClient.get(reqUrl,this.httpOptions);
  }

  getCategoryByName(categoryName:string){
    let reqUrl = this.domain + 'category/name/' + categoryName;
    return this.httpClient.get(reqUrl,this.httpOptions);
  }

  getSubCategoryByName(subCategoryName: string){
    let reqUrl = this.domain + 'subcategory/name/' + subCategoryName;
    return this.httpClient.get(reqUrl,this.httpOptions);
  }

  addItem(item){
    let reqUrl = this.domain + 'details';
    return this.httpClient.post(reqUrl, JSON.stringify(item), this.httpOptions);
    //add item to table
  }

  deleteItem(itemId){
    // delete item
    let reqUrl = this.domain + itemId;
    return this.httpClient.delete(reqUrl, this.httpOptions);
  }

  updateItem(item){
    let reqUrl = this.domain + 'details';
    return this.httpClient.put(reqUrl, item, this.httpOptions);
  }

  updateItemList(itemList){
      let reqUrl = this.domain + 'list';
      return this.httpClient.put(reqUrl, itemList, this.httpOptions);
  }


}
