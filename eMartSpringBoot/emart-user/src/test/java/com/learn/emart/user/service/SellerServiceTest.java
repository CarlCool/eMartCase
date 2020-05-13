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
        sellerEntity.setEmailId("aaaa@aaaaa.com");
        sellerEntity.setGstin("82763547");
        sellerEntity.setPostalAddress("street 10 floor18");
        sellerEntity.setUserName("seller_test");
        sellerEntity.setWebsite("www.test.com");
        Assert.assertNotNull(sellerService.createSeller(sellerEntity));
    }

    @Test
    void getSellerByEmailId() {
        Assert.assertNotNull(sellerService.getSellerByEmailId("seller1@test.com"));
        Assert.assertNull(sellerService.getSellerByEmailId("aaa@testa.test"));
    }
}