package com.learn.emart.item.service;

import com.learn.emart.item.entity.CategoryEntity;
import com.learn.emart.item.entity.SubCategoryEntity;
import com.learn.emart.item.repository.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubCategoryService {

    @Autowired
    private SubCategoryRepository subCategoryRepository;
    @Autowired
    private CategoryService categoryService;

    public List<SubCategoryEntity> getAllSubCategory(){
        return subCategoryRepository.findAll();
    }

    public List<String> getAllSubCategoryName(){
        return subCategoryRepository.findAllSubCategoryName();
    }

    public SubCategoryEntity getSubCategoryById(Integer id){
        return subCategoryRepository.findById(id).orElse(null);
    }

    public SubCategoryEntity getSubCategoryByName(String subCategoryName){
        return subCategoryRepository.findBySubcategoryName(subCategoryName);
    }

    public List<SubCategoryEntity> getSubCategoryByCategoryId(Integer categoryId){
        return subCategoryRepository.findByCategoryId(categoryId);
    }

    public List<SubCategoryEntity> getSubCategoryByCategoryName(String categoryName){
        CategoryEntity category = categoryService.getCategoryByName(categoryName);
        return getSubCategoryByCategoryId(category.getCategoryId());
    }
}
