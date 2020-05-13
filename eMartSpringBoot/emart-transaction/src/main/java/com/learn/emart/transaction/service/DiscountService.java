package com.learn.emart.transaction.service;

import com.learn.emart.transaction.entity.DiscountEntity;
import com.learn.emart.transaction.repository.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DiscountService {
    @Autowired
    private DiscountRepository discountRepository;

    //Get all discount information
    public List<DiscountEntity> getAllDiscount(){
        return discountRepository.findAll();
    }

    public List<DiscountEntity> getDiscountGreaterThenCurrentDate(Date currentDate){
        return discountRepository.findByEndDateGreaterThan(currentDate);
    }

    public DiscountEntity addDiscount(DiscountEntity discount){
        return discountRepository.save(discount);
    }

    public void deleteDiscountById(Integer discountId){
        discountRepository.deleteById(discountId);
    }
}
