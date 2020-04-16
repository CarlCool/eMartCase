import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
    import { ItemListComponent } from './components/home/item-list/item-list.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { DiscountComponent } from './components/discount/discount.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PurchaseHistoryComponent,
    DiscountComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
