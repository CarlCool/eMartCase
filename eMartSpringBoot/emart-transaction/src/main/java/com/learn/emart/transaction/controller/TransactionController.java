package com.learn.emart.transaction.controller;

import com.learn.emart.transaction.entity.PurchaseHistoryEntity;
import com.learn.emart.transaction.entity.TransactionEntity;
import com.learn.emart.transaction.model.MessageView;
import com.learn.emart.transaction.service.PurchaseHistoryService;
import com.learn.emart.transaction.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("action")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @Autowired
    private PurchaseHistoryService purchaseHistoryService;
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

    // add transaction by list.
    @PostMapping("list")
    public List<TransactionEntity> addTransactionList(@RequestBody List<TransactionEntity> transactionEntityList){
        return transactionService.addTransactions(transactionEntityList);
    }

    //Add transaction and purchase history in transaction.
    @Transactional
    @PostMapping("both")
    public ResponseEntity<MessageView> addBothInTransaction(@RequestBody List<TransactionEntity> transactionEntityList,
                                                            @RequestBody List<PurchaseHistoryEntity> purchaseHistoryEntityList){
        transactionService.addTransactions(transactionEntityList);
        purchaseHistoryService.addPurchaseHistoryByList(purchaseHistoryEntityList);
        MessageView messageView = new MessageView();
        messageView.setMessageCode(2);
        messageView.setMessageContent("Both add successfully");
        return ResponseEntity.ok(messageView);
    }

    // Delete transaction by transaction Id
    @DeleteMapping("{transactionId}")
    public ResponseEntity<String> deleteTransactionById(@PathVariable("transactionId")Integer id){
        transactionService.deleteTransactionById(id);
        return ResponseEntity.ok("Transaction delete successfully.");
    }


}
