package com.learn.emart.item;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class EmartItemApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmartItemApplication.class, args);
	}

}
