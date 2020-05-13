package com.learn.emart.transaction.controller;

import com.learn.emart.transaction.entity.PurchaseHistoryEntity;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class PurchaseHistoryControllerTest {
    @Autowired
    PurchaseHistoryController purchaseHistoryController;

    @Test
    void addPurchaseHistory() {
        PurchaseHistoryEntity purchaseHistoryEntity = new PurchaseHistoryEntity();
        purchaseHistoryEntity.setBuyerId(1);
        purchaseHistoryEntity.setDiscountPercentage(new BigDecimal(0.2));
        purchaseHistoryEntity.setItemId(1);
        purchaseHistoryEntity.setItemName("test");
        purchaseHistoryEntity.setItemNumbers(2);
        purchaseHistoryEntity.setItemPrice(new BigDecimal(1000));
        purchaseHistoryEntity.setRemarks("test");
        purchaseHistoryEntity.setSellerId(1);
        purchaseHistoryEntity.setTax(new BigDecimal(0.3));
        purchaseHistoryEntity.setTransactionId(9);
        Assert.assertEquals(ResponseEntity.ok("Add purchase history successfully."), purchaseHistoryController.addPurchaseHistory(purchaseHistoryEntity));
    }

    @Test
    void getPurchaseHistoryByBuyerId() {
        Assert.assertNotNull(purchaseHistoryController.getPurchaseHistoryByBuyerId(2));
        Assert.assertEquals(0,purchaseHistoryController.getPurchaseHistoryByBuyerId(100).size());
    }
}