package com.dxc.shoppingcart.model;

import com.dxc.shoppingcart.model.Enums.PaymentMode;
import com.dxc.shoppingcart.model.Enums.PaymentStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity(name="PaymentTable")
public class Payment {
    
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long paymentId;
    private Long orderId; // Every payment to be Mapped with an order
    private PaymentMode paymentMode;
    private PaymentStatus paymentStatus;

   

}