package com.lab.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lab.Entity.ProductSize;

public interface ProductSizeDAO extends JpaRepository<ProductSize, Integer>{

	List<ProductSize> findByProductId(Integer productId);
}
