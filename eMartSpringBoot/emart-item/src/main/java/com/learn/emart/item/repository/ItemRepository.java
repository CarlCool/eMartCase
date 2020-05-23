package com.learn.emart.item.repository;

import com.learn.emart.item.entity.ItemEntity;
import com.learn.emart.item.model.ItemView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ItemRepository extends JpaRepository<ItemEntity,Integer>, JpaSpecificationExecutor {
    @Query(value = "SELECT new com.learn.emart.item.model.ItemView(i, c, sc) " +
            "FROM ItemEntity i, CategoryEntity c, SubCategoryEntity sc " +
            "WHERE i.categoryId = c.categoryId AND i.subcategoryId = sc.subcategoryId")
    public List<ItemView> findItemView();

    @Query(value = "SELECT new com.learn.emart.item.model.ItemView(i, c, sc) " +
            "FROM ItemEntity i, CategoryEntity c, SubCategoryEntity sc " +
            "WHERE i.categoryId = c.categoryId AND i.subcategoryId = sc.subcategoryId " +
            "AND i.itemId = ?1")
    public ItemView findItemViewById(Integer id);

    @Query(value = "SELECT new com.learn.emart.item.model.ItemView(i, c, sc) " +
            "FROM ItemEntity i, CategoryEntity c, SubCategoryEntity sc " +
            "WHERE i.categoryId = c.categoryId AND i.subcategoryId = sc.subcategoryId " +
            "AND i.categoryId = ?1")
    public List<ItemView> findItemViewByCategoryId(Integer categoryId);

    @Query(value = "SELECT new com.learn.emart.item.model.ItemView(i, c, sc) " +
            "FROM ItemEntity i, CategoryEntity c, SubCategoryEntity sc " +
            "WHERE i.categoryId = c.categoryId AND i.subcategoryId = sc.subcategoryId " +
            "AND i.subcategoryId = ?1")
    public List<ItemView> findItemViewBySubCategoryId(Integer subCategoryId);

    @Query(value = "SELECT new com.learn.emart.item.model.ItemView(i, c, sc) " +
            "FROM ItemEntity i, CategoryEntity c, SubCategoryEntity sc " +
            "WHERE i.categoryId = c.categoryId AND i.subcategoryId = sc.subcategoryId " +
            "AND i.sellerId = ?1")
    public List<ItemView> findItemViewBySellerId(Integer sellerId);
}
