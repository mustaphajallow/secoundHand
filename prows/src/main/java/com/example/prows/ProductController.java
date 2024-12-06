package com.example.prows;




import com.example.prows.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductRepo productRepo;

    @GetMapping(value = "/products")
    public String getPage(){
        return "all your product";
    }

    @GetMapping(value = "/products/all")
    public List<Product> getProduct(){
        return productRepo.findAll();
    };

    @PostMapping(value = "/save_product")
    public String updateProduct(@RequestBody Product product){
        System.out.println(product);
        productRepo.save(product);
        return "saved ....";
    }

    @GetMapping(value = "update_product/{id}")
    public String UpdateProduct(@PathVariable long id, @RequestBody Product product){
       Product updateProduct = productRepo.findById(id).get();
        updateProduct.setName(product.getName());
        updateProduct.setPrice(product.getPrice());
        updateProduct.setDescription(product.getDescription());
        updateProduct.setImage(product.getImage());
        updateProduct.setDiscount(product.getDiscount());
        updateProduct.setRating(product.getRating());

        productRepo.save(updateProduct);
        return "updated ...";
    }

    @DeleteMapping(value = "/delete_product/{id}")
    public String deleteProduct(@PathVariable long id){
         Product deleteProduct = productRepo.findById(id).get();
        return "deleted ...";
    }




}
