package com.lab.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lab.Entity.Supplier;

public interface SupplierDAO extends JpaRepository<Supplier, Integer>{

}
