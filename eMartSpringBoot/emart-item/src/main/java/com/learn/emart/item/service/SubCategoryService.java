package com.learn.emart.item.service;

import com.learn.emart.item.entity.SubCategoryEntity;
import com.learn.emart.item.repository.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubCategoryService {

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    public List<SubCategoryEntity> getAllSubCategory(){
        return subCategoryRepository.findAll();
    }

    public List<String> getAllSubCategoryName(){
        return subCategoryRepository.findAllSubCategoryName();
    }

    public SubCategoryEntity getSubCategoryById(Integer id){
        return subCategoryRepository.findById(id).orElse(null);
    }
}
