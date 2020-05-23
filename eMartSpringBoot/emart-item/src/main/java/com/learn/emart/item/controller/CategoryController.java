package com.learn.emart.item.controller;

import com.learn.emart.item.entity.CategoryEntity;
import com.learn.emart.item.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    //Get all Category List
    @GetMapping("all")
    public List<CategoryEntity> getAllCategory(){
        return categoryService.getAllCategory();
    }

    //Get Category Name List
    @GetMapping("allname")
    public List<String> getAllCategoryName(){
        return categoryService.getAllCategoryName();
    }

    //Get Category by Id
    @GetMapping("{id}")
    public CategoryEntity getCategoryById(@PathVariable("id")Integer id){
        return categoryService.getCategoryById(id);
    }

    //Get Category by category name
    @GetMapping("name/{name}")
    public CategoryEntity getCategoryByName(@PathVariable("name")String name){
        return categoryService.getCategoryByName(name);
    }
}
