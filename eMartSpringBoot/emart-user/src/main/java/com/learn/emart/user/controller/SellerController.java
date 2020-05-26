package com.learn.emart.user.controller;

import com.learn.emart.user.entity.SellerEntity;
import com.learn.emart.user.model.MessageView;
import com.learn.emart.user.model.UserValidation;
import com.learn.emart.user.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("seller")
public class SellerController {
    @Autowired
    private SellerService sellerService;

    // Get seller by email Id -- used for logon with role seller
    @GetMapping("email/{emailId}")
    public ResponseEntity<MessageView> getSellerByEmailId(@PathVariable("emailId")String emailId){
        SellerEntity sellerEntity = sellerService.getSellerByEmailId(emailId);
        MessageView messageView = new MessageView();
        if(null == sellerEntity){
            messageView.setMessageCode(0);
            messageView.setMessageContent("not found");
        } else {
            messageView.setMessageCode(4);
            messageView.setMessageContent("email id existed");
        }
        return ResponseEntity.ok().body(messageView);
    }

    // Get seller by Id
    @GetMapping("{id}")
    public SellerEntity getSellerById(@PathVariable("id")Integer id){
        return sellerService.getSellerById(id);
    }

    /*
    create buyer sample data --- for buyer sign up use
    {
    "userName": "seller4",
    "password": "seller4",
    "emailId": "seller4@test.com",
    "connectNumber": "12200000004",
    "companyName": "TEST4 company",
    "gstin":"900000004",
    "companyBrief":"test4 company brief",
    "postalAddress":"streate No.4, floor 4",
    "website":"www.test4.com",
    "bankNumber":"8888000000000004"
     }
     */
    @PostMapping
    public ResponseEntity<MessageView> registerSeller(@RequestBody SellerEntity seller){
//        System.out.println("call save");
        SellerEntity sellerEntity = sellerService.createSeller(seller);
        MessageView messageView = new MessageView();
        messageView.setMessageCode(2);
        messageView.setMessageContent("add successfully");
//        sellerEntity.setPassword("");
        return ResponseEntity.status(HttpStatus.CREATED).body(messageView);
    }

    @PostMapping("validation")
    public ResponseEntity<Map<String,Object>> sellerValidation(@RequestBody UserValidation sellerValidation){
        Map<String, Object> result = new HashMap<String, Object>();
        SellerEntity seller = sellerService.validateSeller(sellerValidation.getEmailId(), sellerValidation.getPassword());
        if(null == seller){
            result.put("error","Not found");
        } else {
            result.put("emailId", seller.getEmailId());
            result.put("buyerId",seller.getId());
            result.put("buyerName",seller.getUserName());
            result.put("role","seller");
            result.put("token","token");
        }
        return ResponseEntity.ok(result);
    }

}
