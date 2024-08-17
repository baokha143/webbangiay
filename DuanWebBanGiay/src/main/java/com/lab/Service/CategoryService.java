package com.lab.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lab.DAO.CategoryDAO;
import com.lab.Entity.Category;



@Service
public class CategoryService {

    @Autowired
    private CategoryDAO categoryRepository;


    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }


    public Category getCategoryById(Integer id) {
        Optional<Category> category = categoryRepository.findById(id);
        return category.orElse(null);
    }


    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }


    public Category updateCategory(Integer id, Category category) {
        if (categoryRepository.existsById(id)) {
            category.setCid(id);
            return categoryRepository.save(category);
        } else {
            return null;
        }
    }


    public boolean deleteCategory(Integer id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
