package com.learn.emart.item.repository;

import com.learn.emart.item.entity.SubCategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SubCategoryRepository extends JpaRepository<SubCategoryEntity,Integer>, JpaSpecificationExecutor<SubCategoryEntity> {
    //get subcategor name list
    @Query(value = "SELECT subcategory_name FROM tb_sub_category",nativeQuery = true)
    List<String> findAllSubCategoryName();

    public SubCategoryEntity findBySubcategoryName(String name);

    public List<SubCategoryEntity> findByCategoryId(Integer categoryId);
}
