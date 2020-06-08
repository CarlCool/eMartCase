import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { CartService } from '../../services/cart.service';

import { PurchaseService } from '../../services/purchase.service';

import { ItemService } from '../../services/item.service';

interface Alert {
    type: string;
    message: string;
}

const ALERTS: Alert[] = [];

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


    constructor(private cartServie: CartService, private purchaseService: PurchaseService, private itemService: ItemService, private router: Router) { }

    ngOnInit(): void {
        this.cartList = this.cartServie.selectedItemInCart;
        this.cartTotal = this.cartServie.totalIformation;
    }
    cartList: any[];
    cartTotal: any;
    alerts: Alert[];
    transactionType = 'D';

    onSubmit(value) {
        if (this.valid()) {
            let transactionList: any[] = [];
            let itemEntityList: any[] = [];
            let cartList: any[] = [];
            let purchaseHistoryList: any[] = [];
            let fromCart: boolean = false;
            // let stage: string;
            for (let i = 0; i < this.cartList.length; i++) {
                if (this.cartList[i].cartEntity.cartId) {
                    fromCart = true;
                }
                if (this.cartList[i].itemEntity.itemStock < this.cartList[i].cartEntity.itemNumbers) {
                    this.alerts.push({ type: 'danger', message: 'Stock not enough.' });
                    return;
                } else {
                    this.cartList[i].itemEntity.itemStock = this.cartList[i].itemEntity.itemStock - this.cartList[i].cartEntity.itemNumbers;
                }
                let transaction: any = {};
                transaction.buyerId = this.cartList[i].cartEntity.buyerId;
                transaction.sellerId = this.cartList[i].itemEntity.sellerId;
                transaction.transactionType = value.transactionType;
                transactionList.push(transaction);
                itemEntityList.push(this.cartList[i].itemEntity);
            }
            // console.log(itemEntityList);
            // stage = 'add transaction.'
            this.purchaseService.addTransactionList(transactionList).subscribe((data: any[]) => {
                if (data.length !== 0) {
                    for (let i = 0; i < data.length; i++) {
                        let purchaseHistory: any = {};
                        purchaseHistory.buyerId = this.cartList[i].cartEntity.buyerId;
                        purchaseHistory.sellerId = this.cartList[i].itemEntity.sellerId;
                        purchaseHistory.transactionId = data[i].transactionId;
                        purchaseHistory.itemId = this.cartList[i].itemEntity.itemId;
                        purchaseHistory.itemName = this.cartList[i].itemEntity.itemName;
                        purchaseHistory.itemNumbers = this.cartList[i].cartEntity.itemNumbers;
                        purchaseHistory.itemPrice = this.cartList[i].itemEntity.itemPrice;
                        purchaseHistory.discountPercentage = this.cartTotal.discount;
                        purchaseHistory.tax = this.cartList[i].subCategoryEntity.subcategoryGst;
                        purchaseHistory.remarks = this.cartList[i].itemEntity.itemDescription;
                        purchaseHistoryList.push(purchaseHistory);
                    }

                    // update srock number.
                    this.itemService.updateItemList(itemEntityList).subscribe((result: any) => {
                        if (result) {
                            // add to pruchase history
                            this.purchaseService.addPurchaseHistoryList(purchaseHistoryList).subscribe((purchase: any[]) => {
                                if (purchase.length !== 0) {
                                    for (let i = 0; i < purchase.length; i++) {
                                        let cart: any;
                                        cart = this.cartList[i].cartEntity;
                                        cartList.push(cart);
                                    }

                                    if (fromCart) {
                                        // delete items in cart.
                                        this.cartServie.deleteItemsByList(cartList).subscribe((result: any) => {
                                            if (result.messageCode = 1) {
                                                this.router.navigate(["cart"]);
                                            }
                                        });
                                    } else {
                                        alert("Done");
                                        this.router.navigate(["home"]);
                                    }
                                }
                            });
                        }
                    });
                }
            }, (error) => {
                if (error.status === 401) {
                    if (localStorage.getItem("token")) {
                        this.alerts.push({ type: 'danger', message: "logon expired, please log on again." });
                        localStorage.clear();
                    } else {
                        this.alerts.push({ type: 'danger', message: "Please log on first." });
                    }
                } else {
                    this.alerts.push({ type: 'danger', message: "System error " + error.status  + ". Please try again later." });
                }
            });
        }

    }

    valid() {
        this.reset();
        let result = true;
        if (this.cartList.length === 0) {
            this.alerts.push({ type: 'danger', message: 'No transaction informations' });
            result = false;
        }
        return result;
    }

    close(alert: Alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

    reset() {
        this.alerts = Array.from(ALERTS);
    }

}
