package com.dxc.shoppingcart.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity(name="OrderProductTable")
public class OrderProduct {
	
	@Id
    private String productId;
	@Column
    private String productName;
	@Column
    private int quantity;
	@Column
    private double price;

    
}
