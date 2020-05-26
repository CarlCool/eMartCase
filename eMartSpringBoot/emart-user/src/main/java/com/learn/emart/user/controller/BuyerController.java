package com.learn.emart.user.controller;

import com.learn.emart.user.entity.BuyerEntity;
import com.learn.emart.user.model.UserValidation;
import com.learn.emart.user.model.MessageView;
import com.learn.emart.user.service.BuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("buyer")
public class BuyerController {

    @Autowired
    private BuyerService buyerService;


    // Get Buyer by email Id -- for buyer logon use

    @GetMapping("email/{emailId}")
    public ResponseEntity<MessageView> getBuyerByEmailId(@PathVariable("emailId")String emailId){
//        BuyerEntity buyerEntity = new BuyerEntity();
        BuyerEntity buyerEntity = buyerService.getUserByEmaiId(emailId);
        MessageView messageView = new MessageView();
        if(null == buyerEntity){
            messageView.setMessageCode(0);
            messageView.setMessageContent("not found");
        }else {
            messageView.setMessageCode(4);
            messageView.setMessageContent("email id existed");
        }
        return ResponseEntity.ok().body(messageView);

    }

    // Get Buyer by id
    @GetMapping("{id}")
    public BuyerEntity getBuyerById(@PathVariable("id")Integer id){
        return  buyerService.getBuyerById(id);
    }


    /*
    create buyer sample data --- for buyer sign up use
    {
    "userName": "buyer7",
    "password": "buyer7",
    "emailId": "buyer7@test.com",
    "mobileNumber": "12100000007"
     }
     */
    @PostMapping
    public ResponseEntity<MessageView> registerBuyer(@RequestBody BuyerEntity buyer){
        BuyerEntity buyerEntity = buyerService.createBuyer(buyer);
        MessageView messageView = new MessageView();
        messageView.setMessageCode(2);
        messageView.setMessageContent("Add successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(messageView);
    }

    @PostMapping("validation")
    public ResponseEntity<Map<String, Object>> buyerValidation(@RequestBody UserValidation buyerValidation){
        BuyerEntity buyer = buyerService.validateBuyer(buyerValidation.getEmailId(),buyerValidation.getPassword());
        Map<String, Object> result = new HashMap<String, Object>();
        if(null == buyer){
            result.put("error","Not found");
        } else {
            result.put("emailId", buyer.getEmailId());
            result.put("buyerId",buyer.getId());
            result.put("buyerName",buyer.getUserName());
            result.put("role","buyer");
            result.put("token","token");
        }
        return ResponseEntity.ok().body(result);
    }

}
