import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
    // import { ItemListComponent } from './components/home/item-list/item-list.component';
    import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { DiscountComponent } from './components/discount/discount.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
    { 
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
    { path: '**', redirectTo: '/home' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
