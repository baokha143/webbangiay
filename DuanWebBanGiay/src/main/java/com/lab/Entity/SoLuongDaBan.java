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
@Table(name = "SoLuongDaBan")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SoLuongDaBan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productID;

    @Column(name = "soLuongDaBan")
    private Integer soLuongDaBan;

    @ManyToOne
    @JoinColumn(name = "productID", insertable = false, updatable = false)
    private Product product;
}