package com.learn.emart.zuul.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;


@FeignClient(name = "emart-user")  // sever name
public interface SecurityFeignClient {
    @GetMapping("user/buyer/token/validation")
    public boolean buyerTokenValidation(@RequestHeader("Authorization") String authHead);

    @GetMapping("user/seller/token/validation")
    public boolean sellerTokenValidation(@RequestHeader("Authorization") String authHead);

}
