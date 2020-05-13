package com.learn.emart.user.controller;

import com.learn.emart.user.entity.BuyerEntity;
import com.learn.emart.user.service.BuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("buyer")
public class BuyerController {

    @Autowired
    private BuyerService buyerService;


    // Get Buyer by email Id -- for buyer logon use

    @GetMapping("email/{emailId}")
    public BuyerEntity getBuyerByEmailId(@PathVariable("emailId")String emailId){
        return buyerService.getUserByEmaiId(emailId);
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
    public ResponseEntity<String> registerBuyer(@RequestBody BuyerEntity buyer){
        BuyerEntity buyerEntity = buyerService.createBuyer(buyer);
        return ResponseEntity.status(HttpStatus.CREATED).body("User created.");
    }

}
