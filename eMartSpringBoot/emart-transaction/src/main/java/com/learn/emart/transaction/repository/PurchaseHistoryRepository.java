package com.learn.emart.transaction.repository;

import com.learn.emart.transaction.entity.PurchaseHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseHistoryRepository extends JpaRepository<PurchaseHistoryEntity,Integer>{
    public List<PurchaseHistoryEntity> findBySellerId(Integer sellerId);
    public List<PurchaseHistoryEntity> findByBuyerId(Integer buyerId);
}
