package com.learn.emart.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class EmartuserApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmartuserApplication.class, args);
	}

}
