package com.lab.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.lab.DTO.AuthenticationRequest;
import com.lab.DTO.AuthenticationResponse;
import com.lab.DTO.RegisterRequest;
import com.lab.Entity.Account;
import com.lab.Service.AccountService;
import com.lab.Service.JwtUserDetailsService;
import com.lab.Util.JwtTokenUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    @Autowired
    private AccountService accountService;

    @GetMapping("/user-info")
    public Account getUserInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = null;
        
        if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            username = userDetails.getUsername();
        } else {
            // Xử lý trường hợp không lấy được username
            throw new RuntimeException("Không lấy được thông tin người dùng.");
        }

        // Giả sử bạn có phương thức trong AccountService để lấy thông tin tài khoản dựa trên username
        return accountService.findByUsername1(username);
    }
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody RegisterRequest registerRequest) {
        Account account = new Account();
        account.setUsername(registerRequest.getUsername());
        account.setPassword(registerRequest.getPassword()); // Password should be encoded before saving
        account.setEmail(registerRequest.getEmail());
        account.setIsSell(registerRequest.getIsSell());
        account.setIsAdmin(registerRequest.getIsAdmin());

        accountService.registerNewAccount(account);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Đăng ký thành công!");
        return ResponseEntity.ok(response);
    }


    @PostMapping("/login")
    public AuthenticationResponse createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return new AuthenticationResponse(token);
    }

    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestBody String email) {
        // Logic để xử lý quên mật khẩu, như gửi email reset mật khẩu
        return "Password reset link has been sent to your email";
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
    }
    
}
