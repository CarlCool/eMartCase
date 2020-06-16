import { Component, OnInit,ViewChild } from '@angular/core';

import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';


import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public item:ItemService) { }

  ngOnInit(): void {
      if (localStorage.getItem("reload")){
          localStorage.removeItem("reload");
          location.reload();
      }
      this.item.getCategoryList().subscribe((data:any[]) => {
          this.categoryList = data;
      },
      error => {
        //   error;
      });
      this.item.getSubCategoryNameList().subscribe((data : any) => {
          this.subCategoryList = data;
      })
      this.getAllItem();
  }

  categoryList:any[] = [];
  subCategoryList:string[] = [];
  itemList:any[] = [];
  allItemList:any[] = [];
  public getItemListByCate(categoryId : number){
      this.item.getItemViewListByCate(categoryId).subscribe((data:any) => {
          this.itemList = data;
      })
  }

  public getAllItem(){
      this.item.getItemViewList().subscribe((data:any) => {
          this.itemList = data;
          this.allItemList = data;
      });
  }

  public inputText:string;
  

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  searchHead = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.subCategoryList
        : this.subCategoryList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

//   searchItemList(search:string){
//       this.itemList = this.item.serachItem(search);
//   }
  searchItemList(name : string){
    //
    let searchList:any = []; 
    // this.allItemList
    this.allItemList.forEach(item=>{
        if(item.itemEntity.itemName.toLowerCase().indexOf(name.toLowerCase())>-1 || 
        item.subCategoryEntity.subcategoryName.toLowerCase().indexOf(name.toLowerCase())>-1 ||
        item.categoryEntity.categoryName.toLowerCase().indexOf(name.toLowerCase())>-1){
            searchList.push(item);
        }
    });
    this.itemList = searchList;
}



}
