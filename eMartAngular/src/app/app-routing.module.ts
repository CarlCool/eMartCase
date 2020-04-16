import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
    import { ItemListComponent } from './components/home/item-list/item-list.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { DiscountComponent } from './components/discount/discount.component';


const routes: Routes = [
    { 
        path: 'home', component: HomeComponent,
        children : [
            {
                path: 'itemlist', component: ItemListComponent,
            }   
        ]
    },
    { path: 'purchase', component: PurchaseHistoryComponent },
    { path: 'discount', component: DiscountComponent },
    // { path: 'itemlist', component: ItemListComponent },
    { path: '**', redirectTo: '/home', }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
