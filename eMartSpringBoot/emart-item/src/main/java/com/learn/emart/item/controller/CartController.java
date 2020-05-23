package com.learn.emart.item.controller;

import com.learn.emart.item.entity.CartEntity;
import com.learn.emart.item.model.CartView;
import com.learn.emart.item.model.MessageView;
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
    public List<CartView> getCartViewByBuyerId(@PathVariable("buyerId")Integer buyerId){
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
    public ResponseEntity<MessageView> addCart(@RequestBody CartEntity cart){
        cartService.addCart(cart);
        MessageView messageView = new MessageView();
        messageView.setMessageCode(2);
        messageView.setMessage("Add successfully");
        return ResponseEntity.ok(messageView);
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
    public ResponseEntity<MessageView> updateCart(@RequestBody CartEntity cart){
        cartService.updateCart(cart);
        MessageView messageView = new MessageView();
        messageView.setMessageCode(3);
        messageView.setMessage("Update successfully");
        return ResponseEntity.ok(messageView);
    }

    //Delete cart By cart id
    @DeleteMapping("{cartId}")
    public ResponseEntity<MessageView> deleteCartById(@PathVariable("cartId")Integer id){
        cartService.deleteCartByCartId(id);
        MessageView messageView = new MessageView();
        messageView.setMessageCode(1);
        messageView.setMessage("Delete successfully");
        return ResponseEntity.ok(messageView);
    }

    //Delete cart By list (as delete can not use RequestBody in delete)
    @PostMapping("list")
    public ResponseEntity<MessageView> deleteCartByList(@RequestBody List<CartEntity> cartList){
        cartService.deleteCartByList(cartList);
        MessageView messageView = new MessageView();
        messageView.setMessageCode(1);
        messageView.setMessage("Delete successfully");
        return ResponseEntity.ok(messageView);
    }
}
