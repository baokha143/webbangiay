package com.lab.Service;

import com.lab.Entity.Review;

import com.lab.DAO.ReviewDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewDAO reviewRepository;

    // Lấy danh sách review theo productId
    public List<Review> getReviewsByProductId(Integer productId) {
        return reviewRepository.findByProductId(productId);
    }

    // Lưu review mới
    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

    // Cập nhật review
    public Review updateReview(Integer id, Review reviewDetails) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        if (optionalReview.isPresent()) {
            Review existingReview = optionalReview.get();
            existingReview.setContentReview(reviewDetails.getContentReview());
            existingReview.setUpdatedAt(reviewDetails.getUpdatedAt());
            return reviewRepository.save(existingReview);
        } else {
            throw new RuntimeException("Review not found with id " + id);
        }
    }

    // Xóa review
    public void deleteReview(Integer id) {
        reviewRepository.deleteById(id);
    }
}
