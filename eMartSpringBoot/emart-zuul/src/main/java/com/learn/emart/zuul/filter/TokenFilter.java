package com.learn.emart.zuul.filter;

import com.learn.emart.zuul.feign.SecurityFeignClient;
import com.learn.emart.zuul.model.MessageView;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@Component
public class TokenFilter extends ZuulFilter {

//    public final static

    @Autowired
    private SecurityFeignClient securityFeignClient;

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 0;
    }

    @Override
    public boolean shouldFilter() {
        RequestContext requestContext = RequestContext.getCurrentContext();
        HttpServletRequest request = requestContext.getRequest();
        log.info("URI : {}", request.getRequestURI());
        // White list
        if("/emart-user/user/buyer/validation".equalsIgnoreCase(request.getRequestURI())){
            return false;
        }else if("/emart-user/user/buyer".equalsIgnoreCase(request.getRequestURI())){
            return false;
        }else if(request.getRequestURI().toLowerCase().indexOf("/emart-user/user/buyer/email") >= 0){
            return false;
        }else if("/emart-item/item/details/all".equalsIgnoreCase(request.getRequestURI())){
            return false;
        }else if("/emart-item/item/category/all".equalsIgnoreCase(request.getRequestURI())){
            return false;
        }else if("/emart-item/item/subcategory/allname".equalsIgnoreCase(request.getRequestURI())){
            return false;
        }else if("/emart-user/user/seller/validation".equalsIgnoreCase(request.getRequestURI())){
            return false;
        }else if("/emart-user/user/seller".equalsIgnoreCase(request.getRequestURI())){
            return false;
        }else if(request.getRequestURI().toLowerCase().indexOf("/emart-user/user/seller/email") >= 0){
            return false;
        }

        return true;
    }

    @Override
    public Object run() throws ZuulException {
        RequestContext requestContext = RequestContext.getCurrentContext();
        HttpServletRequest request = requestContext.getRequest();
        // get token form header

        log.info("send {} request to {}", request.getMethod(), request.getRequestURL().toString());
        String authHeader = request.getHeader("Authorization");
        log.info("authHeader= {}", authHeader);

        if(StringUtils.isBlank(authHeader)){
            log.info("Zuul --- not logon");
            requestContext.setResponseBody("token is null");
            requestContext.setResponseStatusCode(401);
            requestContext.setSendZuulResponse(false);
            return null;
        }
        String role = request.getHeader("role");
        log.info("role is {}", role);
        Boolean tokenValidationResult = false;
        if("buyer".equals(role)){
            tokenValidationResult = securityFeignClient.buyerTokenValidation(authHeader);
        } else {
            tokenValidationResult = securityFeignClient.sellerTokenValidation(authHeader);
        }
        log.info("result is {}",tokenValidationResult);
        if(!tokenValidationResult){
            requestContext.setResponseBody("token invalid");
            requestContext.setResponseStatusCode(401);
        }
//
        requestContext.setSendZuulResponse(tokenValidationResult);
//        ResponseEntity<MessageView> messageView = securityFeignClient.getBuyerByEmailId("buyer1@test.com");
//        System.out.println(messageView.getBody().getMessageContent());
//        System.out.println(messageView.getBody().getMessageCode());
//
        return null;
    }
}
