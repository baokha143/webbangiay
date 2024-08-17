package com.lab.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lab.DAO.CategoryDAO;
import com.lab.DAO.InvoiceDAO;
import com.lab.DAO.ProductDAO;
import com.lab.DAO.ProductSizeDAO;
import com.lab.DAO.SoLuongDaBanDAO;
import com.lab.Entity.Category;
import com.lab.Entity.Invoice;
import com.lab.Entity.InvoiceStatus;
import com.lab.Entity.Product;
import com.lab.Entity.ProductSize;

@Service
public class ProductService {
	 @Autowired
	    private InvoiceDAO invoiceDAO; // Thêm thuộc tính
	   @Autowired
	    private ProductDAO productDAO;
	   @Autowired
	    private InvoiceService invoiceService; // Thêm thuộc tính để sử dụng InvoiceService
	   @Autowired
	    private SoLuongDaBanDAO soLuongDaBanDAO;
	   
	   @Autowired
	    private CategoryDAO categoryRepository;
	   
	   @Autowired
	    private ProductSizeDAO productSizeRepository;

	    public List<Product> getAllProducts() {
	        return productDAO.findAll();
	    }

	    public Product getProductById(Integer id) {
	        Optional<Product> product = productDAO.findById(id);
	        return product.orElse(null);
	    }

	    public Product createProduct(Product product) {
	        return productDAO.save(product);
	    }

	    public Product updateProduct(Integer id, Product product) {
	        if (productDAO.existsById(id)) {
	            product.setId(id);
	            return productDAO.save(product);
	        } else {
	            return null;
	        }
	    }

	    public boolean deleteProduct(Integer id) {
	        if (productDAO.existsById(id)) {
	            productDAO.deleteById(id);
	            return true;
	        } else {
	            return false;
	        }
	    }
	    
	    public List<Product> getLatestProducts() {
	        return productDAO.findTop8ByOrderByCreatedAtDesc(); 
	    }
	    
	    public List<Product> getTop3Products(){
	    	return productDAO.findTop3ByOrderByCreatedAtDesc();
	    }
	    
	    public List<Product> getTopBestSaleProducts() {
	    	 List<Product> products = soLuongDaBanDAO.findTopSellingProducts();
	        return products.size() > 8 ? products.subList(0, 6) : products;
	    }
	    
	    public List<Product> getTop8BestSellingProducts() {
	        List<Product> products = soLuongDaBanDAO.findTopSellingProducts();
	        return products.size() > 8 ? products.subList(0, 8) : products;
	    }
	    
	    public Map<String, Long> getProductCountByColor() {
	        List<Object[]> results = productDAO.countProductsByColor();
	        Map<String, Long> colorCountMap = new HashMap<>();
	        for (Object[] result : results) {
	            String color = (String) result[0];
	            Long count = (Long) result[1];
	            colorCountMap.put(color, count);
	        }
	        return colorCountMap;
	    }


	    public List<Product> getProductsByModelAndCategoryName(String cname) {
	        // Tìm các sản phẩm có model là cname
	        List<Product> products = productDAO.findByModel(cname);
	        // Trả về danh sách sản phẩm tìm được
	        return products;
	    }
	    
	    
	    public List<ProductSize> getSizesByProductId(Integer productId) {
	        return productSizeRepository.findByProductId(productId);
	    }
	    
	    public Optional<Product> findById(Integer id) {
	        return productDAO.findById(id); // Giả sử productDAO.findById(id) đã trả về Optional<Product>
	    }
	    
	    // Các phương thức mới đã thêm vào InvoiceService
	    public List<Invoice> getInvoicesByAccountId(Integer accountId) {
	        return invoiceService.getInvoicesByAccountId(accountId);
	    }

	    public Float getTotalAmountByAccountId(Integer accountId) {
	        return invoiceService.getTotalAmountByAccountId(accountId);
	    }

	    public Invoice updateInvoiceStatus(Integer invoiceId, InvoiceStatus status) {
	        return invoiceService.updateInvoiceStatus(invoiceId, status);
	    }

	    public boolean deleteInvoice(Integer invoiceId) {
	        return invoiceService.deleteInvoice(invoiceId);
	    }

	   
	    
}
