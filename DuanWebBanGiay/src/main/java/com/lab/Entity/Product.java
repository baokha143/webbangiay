package com.lab.Entity;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
//Cập nhật Entity Product
@Entity
@Table(name = "Product")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Integer id;

 @Column(name = "name")
 private String name;

 @Column(name = "image")
 private String image;

 @Column(name = "price")
 private Double price;

 @Column(name = "title", length = 500)
 private String title;

 @Column(name = "description", length = 2000)
 private String description;

 @ManyToOne
 @JoinColumn(name = "category_id")
 private Category category;

 @ManyToOne
 @JoinColumn(name = "seller_id")
 private Account seller;

 @Column(name = "model")
 private String model;

 @Column(name = "color")
 private String color;

 @Column(name = "delivery")
 private String delivery;

 @Column(name = "image2")
 private String image2;

 @Column(name = "image3")
 private String image3;

 @Column(name = "image4")
 private String image4;

 @OneToMany(mappedBy = "product")
 @JsonIgnore
 private List<ProductSize> sizes;

 @Column(name = "discount")
 private Double discount;

 @Column(name = "averageRating")
 private Double averageRating;

 @Column(name = "createdAt")
 private LocalDateTime createdAt;

 @Column(name = "updatedAt")
 private LocalDateTime updatedAt;

}