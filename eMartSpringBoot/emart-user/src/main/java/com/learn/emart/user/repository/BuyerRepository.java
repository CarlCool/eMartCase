package com.learn.emart.user.repository;

import com.learn.emart.user.entity.BuyerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BuyerRepository extends JpaRepository<BuyerEntity, Integer> {
    BuyerEntity findByEmailId(String emailId);

    public BuyerEntity findByEmailIdAndPassword(String emailId, String Password);
}
