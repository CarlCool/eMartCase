package com.learn.emart.user.repository;

import com.learn.emart.user.entity.BuyerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuyerRepository extends JpaRepository<BuyerEntity, Integer> {
    BuyerEntity findByEmailId(String emailId);
}
