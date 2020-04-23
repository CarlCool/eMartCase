import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DatePipe } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//customer service
import { ItemService } from './services/item.service';
import { CartService } from './services/cart.service';
import { PurchaseService } from './services/purchase.service';

//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//customer component
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/home/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { DiscountComponent } from './components/discount/discount.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PurchaseHistoryComponent,
    DiscountComponent,
    ItemListComponent,
    ItemDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [ItemService,CartService,DatePipe,PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
