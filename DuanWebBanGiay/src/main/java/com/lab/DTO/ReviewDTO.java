package com.lab.DTO;

import java.time.LocalDateTime;

public class ReviewDTO {
    private Integer maReview;
    private AccountDTO account;
    private ProductDTO product;
    private String contentReview;
    private LocalDateTime dateReview;
    private LocalDateTime updatedAt;

    // Getters và Setters
    public Integer getMaReview() { return maReview; }
    public void setMaReview(Integer maReview) { this.maReview = maReview; }

    public AccountDTO getAccount() { return account; }
    public void setAccount(AccountDTO account) { this.account = account; }

    public ProductDTO getProduct() { return product; }
    public void setProduct(ProductDTO product) { this.product = product; }

    public String getContentReview() { return contentReview; }
    public void setContentReview(String contentReview) { this.contentReview = contentReview; }

    public LocalDateTime getDateReview() { return dateReview; }
    public void setDateReview(LocalDateTime dateReview) { this.dateReview = dateReview; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
