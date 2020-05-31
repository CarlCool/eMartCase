package com.learn.emart.transaction.repository;

import com.learn.emart.transaction.entity.DiscountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface DiscountRepository extends JpaRepository<DiscountEntity, Integer> {
    public List<DiscountEntity> findByEndDateGreaterThan(Date endDate);
    public DiscountEntity findByDiscountCode(Integer discountCode);
}
