package com.learn.emart.user.service;

import com.learn.emart.user.entity.SellerEntity;
import com.learn.emart.user.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerService {
    @Autowired
    private SellerRepository sellerRepository;

    //Get seller By Id
    public SellerEntity getSellerById(Integer id){
        return sellerRepository.findById(id).orElse(null);
    }

    // Create Seller Id
    public SellerEntity createSeller(SellerEntity seller){
        return sellerRepository.save(seller);
    }

    //Get buyer by emailId
    public SellerEntity getSellerByEmailId(String emailId){
        return sellerRepository.findByEmailId(emailId);
    }

    public SellerEntity validateSeller(String emailId, String password){
        return sellerRepository.findByEmailIdAndPassword(emailId, password);
    }

}
