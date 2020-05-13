package com.learn.emart.transaction.service;

import com.learn.emart.transaction.entity.TransactionEntity;
import com.learn.emart.transaction.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public TransactionEntity addTransaction(TransactionEntity transaction){
        return transactionRepository.saveAndFlush(transaction);
    }

    public void deleteTransactionById(Integer id){
        transactionRepository.deleteById(id);
    }
}
