package com.lab.DAO;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.lab.Entity.Product;
import com.lab.Entity.SoLuongDaBan;

public interface SoLuongDaBanDAO extends JpaRepository<SoLuongDaBan, Integer>{

	@Query("SELECT s.product FROM SoLuongDaBan s ORDER BY s.soLuongDaBan DESC")
    List<Product> findTopSellingProducts();
	
}
