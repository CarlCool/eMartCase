package com.learn.emart.user.controller;

import com.learn.emart.user.entity.SellerEntity;
import com.learn.emart.user.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("seller")
public class SellerController {
    @Autowired
    private SellerService sellerService;

    // Get seller by email Id -- used for logon with role seller
    @GetMapping("email/{emailId}")
    public SellerEntity getSellerByEmailId(@PathVariable("emailId")String emailId){
        return sellerService.getSellerByEmailId(emailId);
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
    public ResponseEntity<String> registerSeller(@RequestBody SellerEntity seller){
        System.out.println("call save");
        SellerEntity sellerEntity = sellerService.createSeller(seller);
//        sellerEntity.setPassword("");
        return ResponseEntity.status(HttpStatus.CREATED).body("Seller created");
    }

}
