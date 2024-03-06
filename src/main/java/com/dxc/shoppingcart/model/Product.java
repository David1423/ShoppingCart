package com.dxc.shoppingcart.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity(name="ProductTable")
@AllArgsConstructor
public class Product {
	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
    private long productId;
	
	@Column(name="Product_Name")
    private String productName;
	
	@Column(name="Price")
    private double price;
	
	@Column(name="product_desc")
	private String prodcutDescription;
}
