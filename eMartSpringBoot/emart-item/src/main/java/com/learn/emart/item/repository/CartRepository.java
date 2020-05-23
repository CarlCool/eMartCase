package com.learn.emart.item.repository;

import com.learn.emart.item.entity.CartEntity;
import com.learn.emart.item.model.CartView;
import com.learn.emart.item.model.ItemView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<CartEntity,Integer>, JpaSpecificationExecutor {
    @Query(value = "SELECT new com.learn.emart.item.model.CartView(i,c,sc) " +
            "FROM ItemEntity i, CartEntity c, SubCategoryEntity sc " +
            "WHERE i.itemId = c.itemId AND i.subcategoryId = sc.subcategoryId AND c.buyerId = ?1")
    public List<CartView> findCartViewByBuyerId(Integer buyerId);

}
