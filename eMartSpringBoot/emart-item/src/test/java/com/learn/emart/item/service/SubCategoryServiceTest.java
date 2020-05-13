package com.learn.emart.item.service;

import com.learn.emart.item.entity.SubCategoryEntity;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class SubCategoryServiceTest {
    @Autowired
    SubCategoryService subCategoryService;

    @Test
    void getAllSubCategory() {
        Assert.assertNotNull(subCategoryService.getAllSubCategory());
    }

    @Test
    void getAllSubCategoryName() {
        Assert.assertNotNull(subCategoryService.getAllSubCategoryName());
    }

    @Test
    void getSubCategoryById() {
        Assert.assertNotNull(subCategoryService.getSubCategoryById(1));
        Assert.assertNull(subCategoryService.getSubCategoryById(100));
    }
}