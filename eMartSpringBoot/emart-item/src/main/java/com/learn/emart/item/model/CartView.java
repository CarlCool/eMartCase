package com.learn.emart.item.model;

import com.learn.emart.item.entity.CartEntity;
import com.learn.emart.item.entity.ItemEntity;
import com.learn.emart.item.entity.SubCategoryEntity;

public class CartView {
    private ItemEntity itemEntity;
    private CartEntity cartEntity;
    private SubCategoryEntity subCategoryEntity;

    public CartView(ItemEntity itemEntity, CartEntity cartEntity, SubCategoryEntity subCategoryEntity) {
        this.itemEntity = itemEntity;
        this.cartEntity = cartEntity;
        this.subCategoryEntity = subCategoryEntity;
    }

    public ItemEntity getItemEntity() {
        return itemEntity;
    }

    public void setItemEntity(ItemEntity itemEntity) {
        this.itemEntity = itemEntity;
    }

    public CartEntity getCartEntity() {
        return cartEntity;
    }

    public void setCartEntity(CartEntity cartEntity) {
        this.cartEntity = cartEntity;
    }

    public SubCategoryEntity getSubCategoryEntity() {
        return subCategoryEntity;
    }

    public void setSubCategoryEntity(SubCategoryEntity subCategoryEntity) {
        this.subCategoryEntity = subCategoryEntity;
    }
}
