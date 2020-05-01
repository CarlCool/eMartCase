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
      this.categoryList = this.item.getCategoryList();
      this.subCategoryList = this.item.getSubCategoryNameList();
      this.itemList = this.item.getItemList();
  }

  categoryList:any[] = [];
  subCategoryList:string[] = [];
  itemList:any[] = [];
  public getItemListByCate(cate : String){
      this.itemList = this.item.getItemListByCate(cate);
  }

  public getAllItem(){
      this.itemList = this.item.getItemList();
  }
//   public transfer = "aaaaa";
  
//   active = 1;
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

  searchItemList(search:string){
      this.itemList = this.item.serachItem(search);
  }


}
