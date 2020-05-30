package com.learn.emart.user.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenUtil {

    private static Logger log = LoggerFactory.getLogger(JwtTokenUtil.class);
    public static final String AUTH_HEADER_KEY = "Authorization";
    public static final String TOKEN_PREFIX = "Bearer ";
    private static final String SECRET = "jwt-learn-JWT-SECRET";
    public static final long EXPIRATION = 86400000L;

    public static Claims parseJWT(String jsonWebToken) {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(jsonWebToken).getBody();
            return claims;
        } catch (Exception e){
            log.error("token parse error");
            return null;
        }
    }

    public static String createJWT(Integer userId, String emailId, String role){
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        long expiration = EXPIRATION;
//        Date now = new Date(nowMillis);
        return Jwts.builder().signWith(signatureAlgorithm, SECRET)
                .claim("userId",userId)
                .claim("role", role)
                .setSubject(emailId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .compact();
    }

    public static String getEmailId(String token) {
        return parseJWT(token).getSubject();
    }

    public static Integer getUserId(String token) {
        return parseJWT(token).get("userId", Integer.class);
    }

    public static String getRole(String token) {
        return parseJWT(token).get("role",String.class);
    }

    public static boolean isExpiration(String token){
        return parseJWT(token).getExpiration().before(new Date());
    }

    public static boolean validateToken(String token, String emailId, String role){
        String tokenEmailId = getEmailId(token);
        String tokenRoleId = getRole(token);
        return (tokenEmailId.equals(emailId)
                && tokenRoleId.equals(role)
                && isExpiration(token) == false);

    }

}
