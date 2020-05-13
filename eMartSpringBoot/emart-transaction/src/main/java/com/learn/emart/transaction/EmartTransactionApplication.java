package com.learn.emart.transaction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class EmartTransactionApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmartTransactionApplication.class, args);
	}

}
