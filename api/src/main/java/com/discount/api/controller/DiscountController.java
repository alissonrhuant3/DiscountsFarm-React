package com.discount.api.controller;

import com.discount.api.entity.Discount;
import com.discount.api.services.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("discount")
public class DiscountController {

    @Autowired
    private DiscountService service;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/novoJogo")
    public void saveDiscount(@RequestBody Discount discount){
        service.save(discount);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/jogo/{id}/")
    public Discount findById(@PathVariable("id") Long id){
       return service.findById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/jogo/{id}/")
    public void alterarJogo(@RequestBody  Discount discount, @PathVariable("id") Long id) {
      service.update(discount, id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Discount> getAll() {
        return service.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/delete/{id}/")
    public void deleteById(@PathVariable("id") Long id) {
        service.delete(id);
    }
}
