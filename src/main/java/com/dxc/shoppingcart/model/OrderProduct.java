package com.dxc.shoppingcart.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity(name="OrderProductTable")
public class OrderProduct {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private long productId;
	@Column
    private String productName;
	@Column
    private int quantity;
	@Column
    private double price;

    
}
