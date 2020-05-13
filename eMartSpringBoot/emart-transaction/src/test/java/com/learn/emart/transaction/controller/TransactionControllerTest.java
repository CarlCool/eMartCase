package com.learn.emart.transaction.controller;

import com.learn.emart.transaction.entity.TransactionEntity;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class TransactionControllerTest {

    @Autowired
    private TransactionController transactionController;

    @Test
    void addTransaction() {
        TransactionEntity transactionEntity = new TransactionEntity();
        transactionEntity.setBuyerId(1);
        transactionEntity.setSellerId(1);
        transactionEntity.setTransactionType("D");
//        transactionEntity.setTransactionDateTime(new Date());
//        transactionEntity.setTransactionId(10);

        Assert.assertEquals(ResponseEntity.ok("Transaction add successfully."),transactionController.addTransaction(transactionEntity));
    }

    @Test
    void deleteTransactionById() {
        Assert.assertEquals(ResponseEntity.ok("Transaction delete successfully."), transactionController.deleteTransactionById(10));
    }
}