package com.learn.emart.item.service;

import com.learn.emart.item.entity.CategoryEntity;
import com.learn.emart.item.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    // Get all Category;
    public List<CategoryEntity> getAllCategory(){
        return categoryRepository.findAll();
    }

    // Get all Category Name
    public List<String> getAllCategoryName(){
        return categoryRepository.findAllCategoryName();
    }

    // Get Category By Id
    public  CategoryEntity getCategoryById(Integer id){
        return categoryRepository.findById(id).orElse(null);
    }

    //Get Category By category name
    public CategoryEntity getCategoryByName(String categoryName){
        return categoryRepository.findByCategoryName(categoryName);
    }
}
