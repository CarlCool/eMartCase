import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerLogonGuard implements CanActivate {
  canActivate() {
    if(!localStorage.getItem("token") && !localStorage.getItem("buyerId")){
        alert("Please Log on as Buyer");
        return false;
    }else{
        return true;
    }
  }
  
}
