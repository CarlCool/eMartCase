package com.learn.emart.item.service;

import com.learn.emart.item.entity.CartEntity;
import com.learn.emart.item.model.CartView;
import com.learn.emart.item.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    // Get Cart with item information.
    public List<CartView> getCartViewByBuyerId(Integer id){
        return cartRepository.findCartViewByBuyerId(id);
    }

    // Add update cart information
    public CartEntity addCart(CartEntity cart){
        return cartRepository.saveAndFlush(cart);
    }

    public  CartEntity updateCart (CartEntity cart){
        return cartRepository.saveAndFlush(cart);
    }
}
