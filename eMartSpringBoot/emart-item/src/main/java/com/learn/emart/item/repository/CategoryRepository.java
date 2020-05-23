package com.learn.emart.item.repository;

import com.learn.emart.item.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer>, JpaSpecificationExecutor<CategoryEntity> {
    @Query(value = "SELECT category_name FROM tb_category", nativeQuery = true)
    public List<String> findAllCategoryName();

    public CategoryEntity findByCategoryName(String name);
}
