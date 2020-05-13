package com.learn.emart.item.model;

import com.learn.emart.item.entity.CategoryEntity;
import com.learn.emart.item.entity.ItemEntity;
import com.learn.emart.item.entity.SubCategoryEntity;

public class ItemView {

    private ItemEntity itemEntity;
    private CategoryEntity categoryEntity;
    private SubCategoryEntity subCategoryEntity;

    public ItemView(ItemEntity item, CategoryEntity category, SubCategoryEntity subCategory){
        this.itemEntity = item;
        this.categoryEntity = category;
        this.subCategoryEntity = subCategory;
    }

    public ItemEntity getItemEntity() {
        return itemEntity;
    }

    public CategoryEntity getCategoryEntity() {
        return categoryEntity;
    }

    public SubCategoryEntity getSubCategoryEntity() {
        return subCategoryEntity;
    }
}
