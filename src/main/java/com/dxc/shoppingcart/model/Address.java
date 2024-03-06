package com.dxc.shoppingcart.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Address {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long addressId;
	@Column
	private int Floor_No;
	@Column
	private String Apartment_Name;
	@Column
	private String Street_Name;
	@Column
	private int PinCode;
	

	

}
