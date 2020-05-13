package com.learn.emart.user.repository;

import com.learn.emart.user.entity.SellerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<SellerEntity, Integer> {
    SellerEntity findByEmailId(String emailId);
}
