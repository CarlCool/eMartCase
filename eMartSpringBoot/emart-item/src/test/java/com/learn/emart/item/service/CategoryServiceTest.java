package com.learn.emart.item.service;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class CategoryServiceTest {

    @Autowired
    CategoryService categoryService;

    @Test
    void getAllCategory() {
        Assert.assertNotNull(categoryService.getAllCategory());
    }

    @Test
    void getAllCategoryName() {
        Assert.assertNotNull(categoryService.getAllCategoryName());
    }

    @Test
    void getCategoryById() {
        Assert.assertNotNull(categoryService.getCategoryById(1));
        Assert.assertNull(categoryService.getCategoryById(100));
    }
}