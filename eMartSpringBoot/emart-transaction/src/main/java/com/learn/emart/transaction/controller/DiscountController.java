package com.learn.emart.transaction.controller;

import com.learn.emart.transaction.entity.DiscountEntity;
import com.learn.emart.transaction.service.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityListeners;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("discount")
@EntityListeners(AuditingEntityListener.class)
public class DiscountController {
    @Autowired
    private DiscountService discountService;

    @GetMapping("all")
    public List<DiscountEntity> getAllDiscount(){
        return discountService.getAllDiscount();
    }

    @GetMapping("allavailable")
    public List<DiscountEntity> getDiscountCanUse(){
        Date currentDate = new Date();
        return discountService.getDiscountGreaterThenCurrentDate(currentDate);
    }

    // Get discount by discountCode
    @GetMapping("{discountCode}")
    public DiscountEntity getDiscountByDiscountCode(@PathVariable("discountCode") Integer discountCode){
        return discountService.getByDiscountCode(discountCode);
    }

    // Add discount sample data
    /*

     */
    @PostMapping
    public ResponseEntity<String> addDiscount(@RequestBody DiscountEntity discount){
        discountService.addDiscount(discount);
        return ResponseEntity.ok("Add discount successfully.");
    }

    @DeleteMapping("{discountId}")
    public ResponseEntity<String> deleteDiscountById(@PathVariable("discountId")Integer id){
        discountService.deleteDiscountById(id);
        return ResponseEntity.ok("Delete discount successfully.");
    }
}
