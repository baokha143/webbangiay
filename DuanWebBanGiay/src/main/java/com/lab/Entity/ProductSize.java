package com.lab.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ProductSize")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductSize {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "productID")
    private Product product;

    @Column(name = "size", length = 50)
    private String size;

    @Column(name = "color", length = 50)
    private String color; // Thêm trường màu sắc

    @Column(name = "stock")
    private Integer stock;
}
