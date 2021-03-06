import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { DiscountService } from '../../services/discount.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


interface Alert {
    type: string;
    message: string;
}

const ALERTS: Alert[] = [];
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private cartService: CartService, private discountService: DiscountService, private router: Router, private modalService: NgbModal) { }

    ngOnInit(): void {
        //Get cart list.
        this.cartService.getCartItembyBuyerId(parseInt(localStorage.getItem("buyerId"))).subscribe((cart: any) => {
            this.cartList = cart;
            this.cartService.selectedItemInCart = [];
            this.cartService.totalIformation = {};
        }, (error) => {
            if (error.status === 401) {
                if (localStorage.getItem("token")) {
                    this.alerts.push({ type: 'danger', message: "logon expired, please log on again." });
                    localStorage.clear();
                } else {
                    this.alerts.push({ type: 'danger', message: "Please log on first." });
                }
            } else {
                this.alerts.push({ type: 'danger', message: "System error " + error.status + ". Please try again later." });
            }
        });
    }
    public cartList: any[] = [];
    public itemList: any[] = [];
    public master: boolean = false;
    public alerts: Alert[];
    public discountList: any[];
    public discountCode: String = '';


    selectAll() {
        this.master = !this.master;
        this.cartList.forEach(item => {
            item.checked = this.master;
        });
        this.totalCal();
    }

    // display in the bottom of cart page
    public total: any = { tax: 0, price: 0, discount: 0, cost: 0 };
    totalCal(): void {
        //   let total:any = {};
        this.cartService.selectedItemInCart = [];
        let totalTax: number = 0;
        let totalPrice: number = 0;
        let totalCost: number = 0;
        // let discount: number = 0;
        this.cartList.forEach(item => {
            if (item.checked) {
                totalTax = (totalTax + (item.itemEntity.itemPrice * item.subCategoryEntity.subcategoryGst)) * item.cartEntity.itemNumbers;
                totalPrice = (totalPrice + item.itemEntity.itemPrice) * item.cartEntity.itemNumbers;

                //set select item to share data
                this.cartService.selectedItemInCart.push(item);
            }
        })
        totalCost = (totalPrice + totalTax) * (1 - this.total.discount);
        this.total.tax = totalTax;
        this.total.price = totalPrice;
        // this.total.discount = discount;
        this.total.cost = totalCost;

        // set select total information to share data
        this.cartService.totalIformation = this.total;
    }

    getDiscunt(content) {
        this.reset();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.discountCode = result;
            let currentDate = new Date();
            // get discount value.
            if (result) {
                this.discountService.getDiscountByDiscountCode(result).subscribe((discount: any) => {
                    if (discount) {
                        if ((currentDate >= new Date(discount.startDate)) && (currentDate < new Date(discount.endDate))) {
                            this.total.discount = discount.discountPercentage;
                            this.total.cost = this.total.cost * (1 - this.total.discount);
                        } else {
                            this.total.discount = 0;
                            this.alerts.push({ type: 'danger', message: 'Discount code not available on ' + currentDate + '.' })
                        }
                    } else {
                        this.total.discount = 0;
                        this.alerts.push({ type: 'danger', message: 'Discount code not exist.' });
                    }
                }, (error) => {
                    if (error.status === 401) {
                        if (localStorage.getItem("token")) {
                            this.alerts.push({ type: 'danger', message: "logon expired, please log on again." });
                            localStorage.clear();
                        } else {
                            this.total.discount = 0;
                            this.alerts.push({ type: 'danger', message: "Please log on first." });
                        }
                    } else {
                        this.alerts.push({ type: 'danger', message: "System error " + error.status + ". Please try again later." });
                    }
                });
            } else {
                this.total.discount = 0;
            }
            this.total.cost = this.total.cost * (1 - this.total.discount);
        }, (reason) => {
        });
    }


    //   totalPirce():number{
    //       let totalPrice:number = 0;
    //       this.
    //   }
    checkOut() {
        this.reset();
        if (this.cartService.selectedItemInCart.length !== 0) {
            this.router.navigate(["/transaction"]);
        } else {
            this.alerts.push({ type: 'danger', message: 'Please select checkout item.' });
        }

    }

    deleteItemFromCart(cartId: number) {
        this.reset();
        this.cartService.deleteItemFromCart(cartId).subscribe((result) => {
            if (!result) {
                this.alerts.push({ type: 'danger', message: 'Delete failed. Please try again.' });
            }
            this.ngOnInit();
        }, (error) => {
            if (error.status === 401) {
                if (localStorage.getItem("token")) {
                    this.alerts.push({ type: 'danger', message: "logon expired, please log on again." });
                    // localStorage.clear();
                } else {
                    this.alerts.push({ type: 'danger', message: "Please log on first." });
                }
            } else {
                this.alerts.push({ type: 'danger', message: "System error " + error.status + ". Please try again later." });
            }
        });
    }

    //   validInput(value: any): boolean {
    //     this.reset();
    //     let result = true;

    //     return result;
    //   }

    close(alert: Alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

    reset() {
        this.alerts = Array.from(ALERTS);
    }


}
