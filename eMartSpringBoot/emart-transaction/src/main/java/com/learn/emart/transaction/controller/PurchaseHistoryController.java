package com.learn.emart.transaction.controller;

import com.learn.emart.transaction.entity.PurchaseHistoryEntity;
import com.learn.emart.transaction.service.PurchaseHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("purchasehistory")
public class PurchaseHistoryController {
    @Autowired
    private PurchaseHistoryService purchaseHistoryService;

    //add data to purchase history sample data:
    /*
    url : localhost:8083/transaction/purchasehistory
    {
	"buyerId": 1,
    "sellerId": 2,
    "transactionId": 2,
    "itemId": 4,
    "itemName": "Sweater",
    "itemNumbers": 2,
    "itemPrice": 230.00,
    "discountPercentage": 0.00,
    "tax": 0.10,
    "remarks": "purchase history for buyer 1 add"
    }
     */

    @PostMapping
    public ResponseEntity<String> addPurchaseHistory(@RequestBody PurchaseHistoryEntity purchaseHistory){
        purchaseHistoryService.addPurchaseHistory(purchaseHistory);
        return ResponseEntity.ok("Add purchase history successfully.");
    }

    @PostMapping("list")
    public List<PurchaseHistoryEntity> addPurchaseHistoryList(@RequestBody List<PurchaseHistoryEntity> purchaseHistoryList){
        return purchaseHistoryService.addPurchaseHistoryByList(purchaseHistoryList);
    }

    // Get purchase history by buyer id
    //url : localhost:8083/transaction/purchasehistory/buyer/1
    @GetMapping("buyer/{buyerId}")
    public List<PurchaseHistoryEntity> getPurchaseHistoryByBuyerId(@PathVariable("buyerId")Integer buyerId){
        return purchaseHistoryService.getPurchaseHistoryByBuyerId(buyerId);
    }

    // Get purchase history by seller id
    //url : localhost:8083/transaction/purchasehistory/seller/1
    @GetMapping("seller/{sellerId}")
    public List<PurchaseHistoryEntity> getPurchaseHistoryBySellerId(@PathVariable("sellerId")Integer sellerId){
        return purchaseHistoryService.getPurchaseHistoryBySellerId(sellerId);
    }
}
