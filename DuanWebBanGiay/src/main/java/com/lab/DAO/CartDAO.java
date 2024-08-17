package com.lab.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lab.Entity.Cart;

public interface CartDAO extends JpaRepository<Cart, Integer>{

	
}
