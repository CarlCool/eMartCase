package com.learn.emart.user.service;

import com.learn.emart.user.entity.BuyerEntity;
import com.learn.emart.user.repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyerService {

    @Autowired
    private BuyerRepository buyerRepository;

    public BuyerEntity getBuyerById (Integer id){
        return buyerRepository.findById(id).orElse(null);
    }

    public BuyerEntity getUserByEmailId (String emailId) {
        return buyerRepository.findByEmailId(emailId);
    }

    public List<BuyerEntity> getAllBuyers(){
        return buyerRepository.findAll();
    }

    public BuyerEntity createBuyer(BuyerEntity buyer){
        return buyerRepository.save(buyer);
    }

    public BuyerEntity validateBuyer(String emailId, String password){
        return buyerRepository.findByEmailIdAndPassword(emailId, password);
    }

    public void deleteBuyerByBuyerId(Integer buyerId){
        buyerRepository.deleteById(buyerId);
    }
}
