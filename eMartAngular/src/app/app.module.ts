import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DatePipe } from "@angular/common";

import { RouterTestingModule } from "@angular/router/testing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//customer service
import { ItemService } from './services/item.service';
import { CartService } from './services/cart.service';
import { PurchaseService } from './services/purchase.service';
import { UserService } from './services/user.service';

//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//customer component
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/home/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { DiscountComponent } from './components/discount/discount.component';
import { CartComponent } from './components/cart/cart.component';
import { LogonComponent } from './components/logon/logon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdditemComponent } from './components/additem/additem.component';
import { StockComponent } from './components/stock/stock.component';
import { SellreportComponent } from './components/sellreport/sellreport.component';



@NgModule({
  declarations: [
    DatePipe,
    AppComponent,
    HomeComponent,
    PurchaseHistoryComponent,
    DiscountComponent,
    ItemListComponent,
    ItemDetailComponent,
    CartComponent,
    LogonComponent,
    NavbarComponent,
    SignupComponent,
    AdditemComponent,
    StockComponent,
    SellreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterTestingModule,
  ],
  providers: [ItemService,CartService,UserService,DatePipe,PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
