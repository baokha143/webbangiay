package com.lab.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lab.Entity.Category;

public interface CategoryDAO extends JpaRepository<Category, Integer>{

}
