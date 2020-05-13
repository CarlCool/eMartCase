package com.learn.emart.transaction.service;

import com.learn.emart.transaction.entity.PurchaseHistoryEntity;
import com.learn.emart.transaction.repository.PurchaseHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseHistoryService {
    @Autowired
    private PurchaseHistoryRepository purchaseHistoryRepository;

    //Add purchase history
    public PurchaseHistoryEntity addPurchaseHistory(PurchaseHistoryEntity purchaseHistory){
        return purchaseHistoryRepository.save(purchaseHistory);
    }

    //Get purchase history by buyer id
    public List<PurchaseHistoryEntity> getPurchaseHistoryByBuyerId(Integer id){
        return purchaseHistoryRepository.findByBuyerId(id);
    }
}
