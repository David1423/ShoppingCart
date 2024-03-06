package com.dxc.shoppingcart.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.dxc.shoppingcart.model.Enums.OrderStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity(name="Ordertable")
public class Order {
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
    private long orderId;
	@Column
    private Date orderDate;
  
	
	private List<OrderProduct> orderProducts;
    private OrderStatus status;
    
//
//    // Method to add a product to the order
//    public void addProduct(OrderProduct product) {
//        this.orderProducts.add(product);
//    }
//
//    // Method to remove a product from the order
//    public void removeProduct(OrderProduct product) {
//        this.orderProducts.remove(product);
//    }
//
//    // Method to clear all products from the order
//    public void clearOrderProducts() {
//        this.orderProducts.clear();
//    }
//   

}
