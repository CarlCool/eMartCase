package com.learn.emart.item.repository;

import com.learn.emart.item.entity.CartEntity;
import com.learn.emart.item.model.CartView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<CartEntity,Integer>, JpaSpecificationExecutor {
    @Query(value = "SELECT new com.learn.emart.item.model.CartView(i,c) " +
            "FROM ItemEntity i, CartEntity c " +
            "WHERE i.itemId = c.itemId AND c.buyerId = ?1")
    public List<CartView> findCartViewByBuyerId(Integer buyerId);





}
