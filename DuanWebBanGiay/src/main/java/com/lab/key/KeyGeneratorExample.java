package com.lab.key;

import java.security.Key;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class KeyGeneratorExample {
    public static void main(String[] args) {
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS512);
        String base64Key = java.util.Base64.getEncoder().encodeToString(key.getEncoded());
        System.out.println("Base64 encoded key: " + base64Key);
    }
}
