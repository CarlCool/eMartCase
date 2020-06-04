package com.learn.emart.user.service;

import com.learn.emart.user.entity.SellerEntity;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class SellerServiceTest {

    @Autowired
    SellerService sellerService;

    @Test
    void getSellerById() {
        Assert.assertNotNull(sellerService.getSellerById(1));
        Assert.assertNull(sellerService.getSellerById(100));
    }

    @Test
    void createSeller() {
        SellerEntity sellerEntity = new SellerEntity();
        sellerEntity.setPassword("7777777");
        sellerEntity.setBankNumber("22287878656712");
        sellerEntity.setCompanyBrief("test company");
        sellerEntity.setCompanyName("test case");
        sellerEntity.setConnectNumber("123987876");
        sellerEntity.setEmailId("seller5@testb.com");
        sellerEntity.setGstin("82763547");
        sellerEntity.setPostalAddress("street 10 floor18");
        sellerEntity.setUserName("seller_test5");
        sellerEntity.setWebsite("www.test.com");
        SellerEntity createSeller = sellerService.createSeller(sellerEntity);
        Assert.assertNotNull(createSeller);
        sellerService.deleteSellerBySellerId(createSeller.getId());
    }

    @Test
    void getSellerByEmailId() {
        Assert.assertNotNull(sellerService.getSellerByEmailId("seller1@test.com"));
        Assert.assertNull(sellerService.getSellerByEmailId("aaa@testa.test"));
    }

}