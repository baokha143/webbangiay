package com.lab.Controller;

import com.lab.DTO.ReviewDTO;
import com.lab.Entity.Account;
import com.lab.Entity.Product;
import com.lab.Entity.Review;
import com.lab.Service.AccountService;
import com.lab.Service.ProductService;
import com.lab.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

	 	@Autowired
	    private ReviewService reviewService;
	 	
	 	@Autowired
	    private AccountService accountService;
	 	
	 	@Autowired
	    private ProductService productService;


    // API để lấy danh sách review theo productId
    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getReviewsByProductId(@PathVariable Integer productId) {
        List<Review> reviews = reviewService.getReviewsByProductId(productId);
        if (reviews.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(reviews);
    }

    // API để thêm một review mới
    @PostMapping("/add")
    public ResponseEntity<Map<String, String>> addReview(@RequestBody ReviewDTO reviewDTO) {
        System.out.println("Account ID: " + reviewDTO.getAccount().getAccountID());
        System.out.println("Product ID: " + reviewDTO.getProduct().getProductID());

        // Tạo một đối tượng Review mới
        Review newReview = new Review();

        // Kiểm tra và lấy đối tượng Account và Product từ ID
        if (reviewDTO.getAccount() != null && reviewDTO.getAccount().getAccountID() != null) {
            Account account = accountService.findById(reviewDTO.getAccount().getAccountID())
                    .orElseThrow(() -> new RuntimeException("Account not found"));
            newReview.setAccount(account);
        } else {
            throw new RuntimeException("Invalid account ID");
        }

        if (reviewDTO.getProduct() != null && reviewDTO.getProduct().getProductID() != null) {
            Product product = productService.findById(reviewDTO.getProduct().getProductID())
                    .orElseThrow(() -> new RuntimeException("Product not found"));
            newReview.setProduct(product);
        } else {
            throw new RuntimeException("Invalid product ID");
        }

        // Thiết lập các thuộc tính cho Review mới
        newReview.setContentReview(reviewDTO.getContentReview());
        // Không cần thiết lập dateReview và updatedAt vì chúng được thiết lập bởi @PrePersist và @PreUpdate
        // Lưu Review
        reviewService.saveReview(newReview);
        
        Map<String, String> response = new HashMap<>();
        response.put("message", "Thêm review thành công");
        
        return ResponseEntity.ok(response);
    }



    // API để xóa một review
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Integer id) {
        reviewService.deleteReview(id);
        return ResponseEntity.noContent().build();
    }
}
