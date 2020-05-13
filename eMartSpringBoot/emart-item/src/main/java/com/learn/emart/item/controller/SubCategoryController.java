package com.learn.emart.item.controller;

import com.learn.emart.item.entity.SubCategoryEntity;
import com.learn.emart.item.service.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("subcategory")
public class SubCategoryController {
    @Autowired
    private SubCategoryService subCategoryService;


    @GetMapping("all")
    public List<SubCategoryEntity> getAllSubCategoryList(){
        return subCategoryService.getAllSubCategory();
    }

    //get subcategory Name List used for search
    @GetMapping("allname")
    public List<String> getAllSubCategoryName(){
        return subCategoryService.getAllSubCategoryName();
    }

    //get subcategory By Id -- used for get item
    @GetMapping("{id}")
    public SubCategoryEntity getSubCategoryById(@PathVariable("id")Integer id){
        return subCategoryService.getSubCategoryById(id);
    }
}
