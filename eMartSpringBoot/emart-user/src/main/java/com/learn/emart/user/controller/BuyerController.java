package com.learn.emart.user.controller;

import com.learn.emart.user.annotation.AuthIgnore;
import com.learn.emart.user.entity.BuyerEntity;
import com.learn.emart.user.entity.SellerEntity;
import com.learn.emart.user.jwt.JwtTokenUtil;
import com.learn.emart.user.model.UserValidation;
import com.learn.emart.user.model.MessageView;
import com.learn.emart.user.service.BuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("buyer")
public class BuyerController {

    public static final String ROLE = "buyer";

    @Autowired
    private BuyerService buyerService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;


    // Get Buyer by email Id -- for buyer logon use
//    @AuthIgnore
    @GetMapping("email/{emailId}")
    public ResponseEntity<MessageView> getBuyerByEmailId(@PathVariable("emailId")String emailId){
//        BuyerEntity buyerEntity = new BuyerEntity();
        BuyerEntity buyerEntity = buyerService.getUserByEmailId(emailId);
        MessageView messageView = new MessageView();
        if(null == buyerEntity){
            messageView.setMessageCode(0);
            messageView.setMessageContent("not found");
        }else {
            messageView.setMessageCode(4);
            messageView.setMessageContent("email id existed");
        }
        return ResponseEntity.ok().body(messageView);

    }

    // Get Buyer by id
    @GetMapping("{id}")
    public BuyerEntity getBuyerById(@PathVariable("id")Integer id){
        BuyerEntity buyerEntity = buyerService.getBuyerById(id);
        buyerEntity.setPassword("");
        return  buyerEntity;
    }


    /*
    create buyer sample data --- for buyer sign up use
    {
    "userName": "buyer7",
    "password": "buyer7",
    "emailId": "buyer7@test.com",
    "mobileNumber": "12100000007"
     }
     */
//    @AuthIgnore
    @PostMapping
    public ResponseEntity<MessageView> registerBuyer(@RequestBody BuyerEntity buyer){
        BuyerEntity buyerEntity = buyerService.createBuyer(buyer);
        MessageView messageView = new MessageView();
        messageView.setMessageCode(2);
        messageView.setMessageContent("Add successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(messageView);
    }

//    @AuthIgnore
    @PostMapping("validation")
    public ResponseEntity<Map<String, Object>> buyerValidation(@RequestBody UserValidation buyerValidation){

        BuyerEntity buyer = buyerService.validateBuyer(buyerValidation.getEmailId(),buyerValidation.getPassword());
        Map<String, Object> result = new HashMap<String, Object>();
        if(null == buyer){
            result.put("error","Not found");
        } else {
            String token = jwtTokenUtil.createJWT(buyer.getId(), buyer.getEmailId(), ROLE);
            result.put("emailId", buyer.getEmailId());
            result.put("buyerId", buyer.getId());
            result.put("buyerName", buyer.getUserName());
            result.put("role", ROLE);
            result.put("token", token);
//            ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
//            HttpServletResponse response = servletRequestAttributes.getResponse();
//            response.setHeader(JwtTokenUtil.AUTH_HEADER_KEY, JwtTokenUtil.TOKEN_PREFIX + token);
        }
        return ResponseEntity.ok().body(result);
    }

//    @AuthIgnore
    // Token validation
    @GetMapping("token/validation")
    public Boolean tokenValidation(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        if(null == jwtTokenUtil.parseJWT(token)){
            return false;
        }
//        System.out.println(token);
        Integer tokenUserId = jwtTokenUtil.getUserId(token);
//        String tokenRole = jwtTokenUtil.getRole(token);
        BuyerEntity buyer = buyerService.getBuyerById(tokenUserId);
        String emailId = buyer.getEmailId();
        return JwtTokenUtil.validateToken(token, emailId, ROLE);
    }

}
