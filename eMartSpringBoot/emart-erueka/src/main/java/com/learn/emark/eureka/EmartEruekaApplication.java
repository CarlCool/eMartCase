package com.learn.emark.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EmartEruekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmartEruekaApplication.class, args);
	}

}
