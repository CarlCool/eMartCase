package com.learn.emart.item.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "tb_sub_category")
public class SubCategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer subcategoryId;
    private String subcategoryName;
    private Integer categoryId;
    private String subcategoryBrief;
    private BigDecimal subcategoryGst;

    public SubCategoryEntity() {
    }

    public Integer getSubcategoryId() {
        return subcategoryId;
    }

    public void setSubcategoryId(Integer subcategoryId) {
        this.subcategoryId = subcategoryId;
    }

    public String getSubcategoryName() {
        return subcategoryName;
    }

    public void setSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getSubcategoryBrief() {
        return subcategoryBrief;
    }

    public void setSubcategoryBrief(String subcategoryBrief) {
        this.subcategoryBrief = subcategoryBrief;
    }

    public BigDecimal getSubcategoryGst() {
        return subcategoryGst;
    }

    public void setSubcategoryGst(BigDecimal subcategoryGst) {
        this.subcategoryGst = subcategoryGst;
    }
}
