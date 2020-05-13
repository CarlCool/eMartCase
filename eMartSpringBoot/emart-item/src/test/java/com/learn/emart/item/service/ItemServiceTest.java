package com.learn.emart.item.service;

import com.learn.emart.item.entity.ItemEntity;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class ItemServiceTest {
    @Autowired
    ItemService itemService;

    @Test
    void getAllItems() {
        Assert.assertNotNull(itemService.getAllItems());
    }

    @Test
    void getItemById() {
        Assert.assertNotNull(itemService.getItemById(1));
        Assert.assertNull(itemService.getItemById(100));
    }

    @Test
    void getAllItemsForView() {
        Assert.assertNotNull(itemService.getAllItemsForView());
    }

    @Test
    void getItemForViewById() {
        Assert.assertNotNull(itemService.getItemForViewById(1));
        Assert.assertNull(itemService.getItemForViewById(100));
    }

    @Test
    void saveItem() {
        ItemEntity itemEntity = new ItemEntity();
        itemEntity.setCategoryId(2);
        itemEntity.setItemDescription("test item");
        itemEntity.setItemImage("https://yyyyy.yyyy.yyy1");
        itemEntity.setItemName("test");
        itemEntity.setItemPrice(new BigDecimal(4888.88));
        itemEntity.setItemRemarks("remarks");
        itemEntity.setItemStock(500);
        itemEntity.setSellerId(2);
        itemEntity.setSubcategoryId(2);
        Assert.assertNotNull(itemService.saveItem(itemEntity));
    }

    @Test
    void updateItem() {
        ItemEntity itemEntity = new ItemEntity();
        itemEntity.setCategoryId(2);
        itemEntity.setItemDescription("test item");
        itemEntity.setItemImage("https://zzz.zzzz.zzzz1");
        itemEntity.setItemName("test");
        itemEntity.setItemPrice(new BigDecimal(4888.88));
        itemEntity.setItemRemarks("remarks");
        itemEntity.setItemStock(500);
        itemEntity.setSellerId(2);
        itemEntity.setSubcategoryId(2);
        itemEntity.setItemId(9);
        Assert.assertNotNull((itemService.updateItem(itemEntity)));
    }

    @Test
    void deleteItem() {
        itemService.deleteItem(9);
        Assert.assertNull(itemService.getItemById(9));
    }
}