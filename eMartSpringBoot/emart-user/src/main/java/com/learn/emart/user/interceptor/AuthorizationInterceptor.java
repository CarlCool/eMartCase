//package com.learn.emart.user.interceptor;
//
//import com.learn.emart.user.annotation.AuthIgnore;
//import com.learn.emart.user.entity.BuyerEntity;
//import com.learn.emart.user.entity.SellerEntity;
//import com.learn.emart.user.jwt.JwtTokenUtil;
//import com.learn.emart.user.service.BuyerService;
//import com.learn.emart.user.service.SellerService;
//import lombok.extern.slf4j.Slf4j;
//import org.apache.commons.lang.StringUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import org.springframework.web.method.HandlerMethod;
//import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import static javax.servlet.http.HttpServletResponse.SC_UNAUTHORIZED;
//
//
//@Slf4j
//@Component
//public class AuthorizationInterceptor extends HandlerInterceptorAdapter {
//
//    @Autowired
//    private JwtTokenUtil jwtTokenUtil;
//    @Autowired
//    private BuyerService buyerService;
//    @Autowired
//    private SellerService sellerService;
//
//    @Override
//    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//        AuthIgnore annotation;
////        System.out.println(handler);
//        if(handler instanceof HandlerMethod) {
//            annotation = ((HandlerMethod) handler).getMethodAnnotation(AuthIgnore.class);
//        }else {
//            return true;
//        }
//        // @AuthIgnore do not validate token
//        if(annotation != null){
//            return true;
//        }
//
//        // get authorization
//        final String authHeader = request.getHeader(JwtTokenUtil.AUTH_HEADER_KEY);
//        log.info("## authHeader= {}", authHeader);
//
//        if(StringUtils.isBlank(authHeader) || !authHeader.startsWith(JwtTokenUtil.TOKEN_PREFIX)) {
//            log.info("not logon");
//            response.setCharacterEncoding("UTF-8");
//            response.setContentType("application/json; charset=utf-8");
//            response.sendError(SC_UNAUTHORIZED);
//            return false;
//        }
//
//        // get token
//        final String token = authHeader.substring(7);
//        log.info("token:", token);
//
////        String tokenEmailId = jwtTokenUtil.getEmailId(token);
//        Integer tokenUserId = jwtTokenUtil.getUserId(token);
//        String tokenRole = jwtTokenUtil.getRole(token);
//        String emailId;
//        String role;
//
////        System.out.println(tokenRo);
//
//
//        if(tokenRole.equals("buyer")){
//            BuyerEntity buyer = buyerService.getBuyerById(tokenUserId);
//            emailId = buyer.getEmailId();
//            role = "buyer";
//        } else {
//            SellerEntity seller = sellerService.getSellerById(tokenUserId);
//            emailId = seller.getEmailId();
//            role = "seller";
//        }
//
//        return JwtTokenUtil.validateToken(token, emailId, role);
//
////        System.out.println();
//    }
//}
