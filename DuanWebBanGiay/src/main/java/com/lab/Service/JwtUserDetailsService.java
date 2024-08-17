package com.lab.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.lab.DAO.AccountDAO;
import com.lab.Entity.Account;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private AccountDAO accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Tìm người dùng dựa trên tên đăng nhập
        Account account = accountRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        
        // Tạo đối tượng UserDetails từ Account
        return org.springframework.security.core.userdetails.User
                .withUsername(account.getUsername())
                .password(account.getPassword())
                .roles(account.getIsAdmin() ? "ADMIN" : "USER") // Gán quyền hạn dựa trên thuộc tính isAdmin
                .build();
    }
}
