package com.learn.emart.transaction.controller;

import com.learn.emart.transaction.entity.TransactionEntity;
import com.learn.emart.transaction.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("action")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    //Add transaction sample Data
    /*
    {
	"buyerId" : 1,
	"sellerId" : 3,
	"transactionType" : "D"
     }
     */
    @PostMapping
    public ResponseEntity<String> addTransaction(@RequestBody TransactionEntity transaction){
        transactionService.addTransaction(transaction);
        return ResponseEntity.ok("Transaction add successfully.");
//        return ResponseEntity.status(HttpStatus.CREATED).body(transactionEntity);
    }

    // Delete transaction by transaction Id
    @DeleteMapping("{transactionId}")
    public ResponseEntity<String> deleteTransactionById(@PathVariable("transactionId")Integer id){
        transactionService.deleteTransactionById(id);
        return ResponseEntity.ok("Transaction delete successfully.");
    }
}
