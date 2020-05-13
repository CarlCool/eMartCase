package com.learn.emart.item.controller;

import com.learn.emart.item.entity.CartEntity;
import com.learn.emart.item.model.CartView;
import com.learn.emart.item.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("{buyerId}")
    public List<CartView> getCartViewBySellerId(@PathVariable("buyerId")Integer buyerId){
        return cartService.getCartViewByBuyerId(buyerId);
    }

    // Add Item to cart sample data:
    /*
    {
	"itemId" : 1,
	"itemNumbers" : 1,
	"buyerId" : 1
    }
    */
    @PostMapping
    public ResponseEntity<String> addCart(@RequestBody CartEntity cart){
        cartService.addCart(cart);
        return ResponseEntity.ok("Add to Cart successfully.");
    }

    //Update Item in cart sample data:
    /*
    {
	"cartId" : 5,
	"itemId" : 1,
	"itemNumbers" : 3,
	"buyerId" : 1
    }
     */
    @PutMapping
    public ResponseEntity<String> updateCart(@RequestBody CartEntity cart){
        cartService.updateCart(cart);
        return ResponseEntity.ok("Update successfully.");
    }
}
