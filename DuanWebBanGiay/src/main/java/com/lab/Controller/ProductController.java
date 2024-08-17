package com.lab.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lab.Entity.Product;
import com.lab.Entity.ProductSize;
import com.lab.Service.ProductService;



@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService pdsv;
    


    //list product
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = pdsv.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Integer id) {
        Product product = pdsv.getProductById(id);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Tạo Products mới
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = pdsv.createProduct(product);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

    //Cập nhật sản phẩm
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Integer id, @RequestBody Product product) {
        Product updatedProduct = pdsv.updateProduct(id, product);
        if (updatedProduct != null) {
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Xóa sản phẩm theo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") Integer id) {
        boolean isRemoved = pdsv.deleteProduct(id);
        if (isRemoved) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    // Sản phẩm mới nhất
    @GetMapping("/latest")
    public List<Product> getLatestProducts() {
        return pdsv.getLatestProducts();
    }
    
    @GetMapping("/top3")
    public List<Product> getTop3Products(){
    	return pdsv.getTop3Products();
    }
    
    // top sản phẩm sale
    @GetMapping("/top-sale")
    public ResponseEntity<List<Product>> getTopSaleProducts() {
        List<Product> products = pdsv.getTopBestSaleProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    
    // Sản phẩm bán chạy nhất 
    @GetMapping("/top-selling")
    public ResponseEntity<List<Product>> getTopSellingProducts() {
        List<Product> products = pdsv.getTop8BestSellingProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    
    @GetMapping("/colors")
    public ResponseEntity<Map<String, Long>> getProductCountByColor() {
        Map<String, Long> colorCountMap = pdsv.getProductCountByColor();
        return new ResponseEntity<>(colorCountMap, HttpStatus.OK);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProductsByModel(@RequestParam String model) {
        List<Product> products = pdsv.getProductsByModelAndCategoryName(model);
        return ResponseEntity.ok(products);
    }
    
    @GetMapping("/size/{productId}")
    public ResponseEntity<List<ProductSize>> getSizesByProductId(@PathVariable Integer productId) {
        List<ProductSize> sizes = pdsv.getSizesByProductId(productId);
        if (sizes != null && !sizes.isEmpty()) {
            return new ResponseEntity<>(sizes, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    

}
