package com.lab;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lab.Entity.Review; // Đảm bảo bạn đã định nghĩa thực thể Review

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    boolean existsByProductId(Integer productId); 
}
