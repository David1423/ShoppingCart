package com.dxc.shoppingcart.security;

import java.util.Date;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;

import com.dxc.shoppingcart.model.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JWTUtil {

	@Value("${jwt.secret}")
    private String secret;
 
    @Value("${jwt.expirationMs}")
    private long expirationMs;
 
    public String generateToken(Authentication authentication) {
        User userDetails = (User) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(userDetails.getUserName())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expirationMs))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }
}
