package com.lab.DTO;

import lombok.Data;

@Data
public class ProductDTO {
    private Integer productID;
    private String name;

    // Getters và Setters
    public Integer getProductID() { return productID; }
    public void setProductID(Integer productID) { this.productID = productID; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}