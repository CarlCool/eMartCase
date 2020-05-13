import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
    // import { ItemListComponent } from './components/home/item-list/item-list.component';
    import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { DiscountComponent } from './components/discount/discount.component';
import { CartComponent } from './components/cart/cart.component';
import { LogonComponent } from './components/logon/logon.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdditemComponent } from './components/additem/additem.component';
import { StockComponent } from './components/stock/stock.component';
import { SellreportComponent } from './components/sellreport/sellreport.component';

const routes: Routes = [
    { path: 'logon', component: LogonComponent },
    { 
        //buyer part
        path: 'home', component: HomeComponent,
        // children : [
        //     {
        //         path: 'itemdetail', component: ItemDetailComponent,
        //     }   
        // ]
    },
    { path: 'purchase', component: PurchaseHistoryComponent },
    { path: 'discount', component: DiscountComponent },
    // { path: 'itemlist', component: ItemListComponent },
    { path: 'itemdetail/:id', component: ItemDetailComponent },
    { path: 'cart', component:CartComponent},
    { path: 'signup', component:SignupComponent},

    //seller part
    { path: 'additem', component:AdditemComponent },
    { path: 'stock', component:StockComponent},
    { path: 'report', component:SellreportComponent},
    { path: '**', redirectTo: '/home' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }