package com.learn.emart.transaction.controller;

import com.learn.emart.transaction.entity.DiscountEntity;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class DiscountControllerTest {
    @Autowired
    DiscountController discountController;
    @Test
    void getAllDiscount() {
        Assert.assertNotNull(discountController.getAllDiscount());
    }

    @Test
    void getDiscountCanUse() {
        Assert.assertNotNull(discountController.getDiscountCanUse());
    }

    @Test
    void addDiscount() {
        DiscountEntity discountEntity = new DiscountEntity();
        discountEntity.setDescription("test");
        discountEntity.setDiscountCode(55555);
        discountEntity.setDiscountPercentage(new BigDecimal(0.2));
        discountEntity.setEndDate(new Date());
        discountEntity.setStartDate(new Date());
        Assert.assertEquals(ResponseEntity.ok("Add discount successfully."),discountController.addDiscount(discountEntity));
    }

    @Test
    void deleteDiscountById() {
        Assert.assertEquals(ResponseEntity.ok("Delete discount successfully."), discountController.deleteDiscountById(1));
    }
}