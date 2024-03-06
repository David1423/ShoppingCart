package com.dxc.shoppingcart.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Address {

	private int Floor_No;

	private String Apartment_Name;

	private String Street_Name;

	private int PinCode;
	

	

}
