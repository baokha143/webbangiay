package com.lab.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lab.Entity.Invoice;
public interface InvoiceDAO extends JpaRepository<Invoice, Integer> {
    List<Invoice> findByAccount_uId(Integer uId);
}
