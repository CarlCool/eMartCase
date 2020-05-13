package com.learn.emart.item.service;

import com.learn.emart.item.entity.CartEntity;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class CartServiceTest {

    @Autowired
    CartService cartService;

    @Test
    void getCartViewByBuyerId() {
        Assert.assertNotEquals(0,cartService.getCartViewByBuyerId(1).size());
        Assert.assertEquals(0,cartService.getCartViewByBuyerId(200).size());
    }

    @Test
    void addCart() {
        CartEntity cartEntity = new CartEntity();
        cartEntity.setBuyerId(1);
        cartEntity.setItemId(1);
        cartEntity.setItemNumbers(3);
        Assert.assertNotNull(cartEntity);
    }

    @Test
    void updateCart() {
        CartEntity cartEntity = new CartEntity();
        cartEntity.setCartId(1);
        cartEntity.setItemNumbers(10);
        cartEntity.setItemId(3);
        cartEntity.setBuyerId(2);
        Assert.assertNotNull(cartEntity);
    }
}