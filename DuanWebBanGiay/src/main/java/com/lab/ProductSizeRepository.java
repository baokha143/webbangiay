package com.lab;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lab.Entity.ProductSize; 
@Repository
public interface ProductSizeRepository extends JpaRepository<ProductSize, Integer> {

    // Tìm tất cả các ProductSize theo productId
    List<ProductSize> findByProductId(Integer productId);

    // Xóa tất cả các ProductSize theo productId
    void deleteByProductId(Integer productId);
}
