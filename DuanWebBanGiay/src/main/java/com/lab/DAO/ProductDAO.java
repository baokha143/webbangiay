package com.lab.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.lab.Entity.Product;

public interface ProductDAO extends JpaRepository<Product, Integer>{
	
	// Phương thức tìm 8 sản phẩm mới nhất.
    List<Product> findTop8ByOrderByCreatedAtDesc();
    
    // Phương thức tìm 3 sản phẩm mới nhất.
    List<Product> findTop3ByOrderByCreatedAtDesc();
    
    @Query("SELECT p.color AS color, COUNT(p.id) AS count " +
            "FROM Product p " +
            "GROUP BY p.color")
     List<Object[]> countProductsByColor();
     
     List<Product> findByModel(String model);
     

     
}
