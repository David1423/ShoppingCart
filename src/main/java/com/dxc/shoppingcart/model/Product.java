package com.dxc.shoppingcart.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity(name="ProductTable")
@AllArgsConstructor
public class Product {
	@Id
    private String id;
	@Column(name="Product_Name")
    private String name;
	@Column(name="Price")
    private double price;
}
