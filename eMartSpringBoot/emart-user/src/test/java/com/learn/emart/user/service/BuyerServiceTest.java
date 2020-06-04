package com.learn.emart.user.service;

import com.learn.emart.user.entity.BuyerEntity;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class BuyerServiceTest {
    @Autowired
    BuyerService buyerService;

    @Test
    void getBuyerById() {
        Assert.assertNotNull(buyerService.getBuyerById(1));
        Assert.assertNull(buyerService.getBuyerById(100));
    }

    @Test
    void getAllBuyers() {
        Assert.assertNotNull(buyerService.getAllBuyers());
    }

    @Test
    void createBuyer() {
        BuyerEntity buyerEntity = new BuyerEntity();
        buyerEntity.setMobileNumber("1920000004");
        buyerEntity.setPassword("4444444");
        buyerEntity.setEmailId("buyer7@test.com");
        buyerEntity.setUserName("buyer7");
        BuyerEntity createBuyer = buyerService.createBuyer(buyerEntity);
        Assert.assertNotNull(createBuyer);
        buyerService.deleteBuyerByBuyerId(createBuyer.getId());
    }
}