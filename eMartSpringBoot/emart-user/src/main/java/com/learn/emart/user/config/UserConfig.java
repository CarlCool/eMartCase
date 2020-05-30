package com.learn.emart.user.config;

//import com.learn.emart.user.interceptor.AuthorizationInterceptor;
import org.omg.PortableInterceptor.Interceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class UserConfig implements WebMvcConfigurer {

//    @Bean
//    public AuthorizationInterceptor authorizationInterceptor(){
//        return new AuthorizationInterceptor();
//    }
//    @Autowired
//    private AuthorizationInterceptor authorizationInterceptor;

//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("*")
//                .allowedMethods("POST","GET","PUT","OPTIONS","DELETE")
//                .maxAge(3600)
//                .allowCredentials(true);
//    }

//    @Override
//    public void addInterceptors(InterceptorRegistry registry){
////        registry.addInterceptor(new AuthorizationInterceptor()).addPathPatterns("/**");
//        registry.addInterceptor(authorizationInterceptor).addPathPatterns("/**");
//    }

}
