package com.lab.DAO;


import org.springframework.data.jpa.repository.JpaRepository;

import com.lab.Entity.Account;

import java.util.Optional;

public interface AccountDAO extends JpaRepository<Account, Integer> {
    Optional<Account> findByUsername(String username);
    
  
}
