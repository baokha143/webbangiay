package com.lab.Entity;



import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
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
@Table(name = "Invoice")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Invoice {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer maHD;

	    @ManyToOne(fetch = FetchType.LAZY) // Sử dụng FetchType.LAZY để cải thiện hiệu suất
	    @JoinColumn(name = "productSize_id", nullable = false)
	    private ProductSize productSize;

	    @ManyToOne(fetch = FetchType.LAZY) // Sử dụng FetchType.LAZY để cải thiện hiệu suất
	    @JoinColumn(name = "accountID", nullable = false)
	    private Account account;

	    @Column(name = "tongGia")
	    private Float tongGia;

	    @Column(name = "ngayXuat")
	    private LocalDateTime ngayXuat;

	    @Column(name = "updated_at")
	    private LocalDateTime updatedAt;

	    @Column(name = "status")
	    @Enumerated(EnumType.STRING)
	    private InvoiceStatus status;

}
