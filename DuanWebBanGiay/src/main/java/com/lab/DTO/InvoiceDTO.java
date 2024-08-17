package com.lab.DTO;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceDTO {
    private Integer maHD;
    private String customerUsername;
    private String productName;
    private String color;
    private Integer quantity;
    private Float totalPrice;
    private LocalDateTime dateIssued;
    private LocalDateTime updatedAt;
    private String status;
}
