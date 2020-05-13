package com.learn.emart.item.model;

import com.learn.emart.item.entity.CartEntity;
import com.learn.emart.item.entity.ItemEntity;

public class CartView {
    private ItemEntity itemEntity;
    private CartEntity cartEntity;

    public CartView(ItemEntity itemEntity, CartEntity cartEntity) {
        this.itemEntity = itemEntity;
        this.cartEntity = cartEntity;
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
}
