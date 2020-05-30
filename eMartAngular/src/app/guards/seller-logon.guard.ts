import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerLogonGuard implements CanActivate {
    canActivate() {
        if(!localStorage.getItem("token") && !localStorage.getItem("sellerId")){
            alert("Please Log on as Seller");
            return false;
        }else{
            return true;
        }
      }
  
}
