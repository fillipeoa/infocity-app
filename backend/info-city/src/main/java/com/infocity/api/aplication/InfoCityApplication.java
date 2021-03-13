package com.infocity.api.aplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EntityScan(basePackages={"com.infocity.api.model"})
@EnableJpaRepositories(basePackages={"com.infocity.api.repository"})
@ComponentScan(basePackages = {"com.infocity.api"})
public class InfoCityApplication {

	public static void main(String[] args) {
		SpringApplication.run(InfoCityApplication.class, args);
	}

}
