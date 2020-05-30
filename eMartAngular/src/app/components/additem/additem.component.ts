import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

interface Alert {
    type: string;
    message: string;
}

const ALERTS: Alert[] = [];

@Component({
    selector: 'app-additem',
    templateUrl: './additem.component.html',
    styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.itemService.getCategoryList().subscribe((data: any) => {
            this.categoryList = data;
        })
    }
    alerts: Alert[];

    categoryList: any[];

    subCategoryListByCateName: any[];

    // private getAllCategoryUrl = 'http://a.itying.com/api/productlist';

    getSubCategoryByCateName(categeryName) {
        this.itemService.getSubCategoryByCateName(categeryName).subscribe((data: any) => {
            console.log(data);
            this.subCategoryListByCateName = data;
        })
    }

    onSubmit(value: any) {
        if (this.validInput(value)) {
            this.addItem(value);
        }
    }

    addItem(item) {
        // console.log('start call');
        this.itemService.getCategoryByName(item.category).subscribe((category: any) => {
            this.itemService.getSubCategoryByName(item.subCategory).subscribe((subCategory: any) => {
                // console.log('here');
                let itemEntity: any = {};
                itemEntity.itemName = item.itemName;
                itemEntity.itemImage = 'https://xxxxx.xxxxxx';
                itemEntity.itemPrice = item.itemPrice;
                itemEntity.itemStock = item.itemStock;
                itemEntity.itemDescription = item.itemDescription;
                itemEntity.categoryId = category.categoryId;
                itemEntity.subcategoryId = subCategory.subcategoryId;
                itemEntity.itemRemarks = item.itemRemark;
                itemEntity.sellerId = parseInt(localStorage.getItem("sellerId"));
                console.log('itemEntity:');
                console.log(itemEntity);
                this.itemService.addItem(itemEntity).subscribe((response: any) => {
                    //   if(response.)
                    if (response) {
                        alert("Add item successuflly.");
                    } else {
                        alert("Add item fail. Please try again");
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
                        this.alerts.push({ type: 'danger', message: "System error " + error.status + "Please try again later." });
                    }
                });
            }, (error) => {
                if (error.status === 401) {
                    if (localStorage.getItem("token")) {
                        this.alerts.push({ type: 'danger', message: "logon expired, please log on again." });
                        localStorage.clear();
                    } else {
                        this.alerts.push({ type: 'danger', message: "Please log on first." });
                    }
                } else {
                    this.alerts.push({ type: 'danger', message: "System error " + error.status + "Please try again later." });
                }
            });
        }, (error) => {
            if (error.status === 401) {
                if (localStorage.getItem("token")) {
                    this.alerts.push({ type: 'danger', message: "logon expired, please log on again." });
                    localStorage.clear();
                } else {
                    this.alerts.push({ type: 'danger', message: "Please log on first." });
                }
            } else {
                this.alerts.push({ type: 'danger', message: "System error " + error.status + "Please try again later." });
            }
        });
    }

    validInput(value: any) {
        console.log('this is value');
        console.log(value);
        this.reset();
        let result = true;
        if (!value.category) {
            this.alerts.push({ type: 'danger', message: 'category required!' })
            result = false;
        }

        if (!value.subCategory) {
            this.alerts.push({ type: 'danger', message: 'subcategory required!' })
            result = false;
        }

        if (!value.itemPrice) {
            this.alerts.push({ type: 'danger', message: 'item price required!' })
            result = false;
        } else {
            if (value.itemPrice <= 0) {
                this.alerts.push({ type: 'danger', message: 'item price should more then 0!' })
                result = false;
            }
        }


        if (!value.itemStock) {
            this.alerts.push({ type: 'danger', message: 'stock number required!' })
            result = false;
        } else {
            if (value.itemStock < 0) {
                this.alerts.push({ type: 'danger', message: 'stock number should more then 0!' })
                result = false;
            }
        }

        if (!value.category) {
            this.alerts.push({ type: 'danger', message: 'category required!' })
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
