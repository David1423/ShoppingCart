package com.dxc.shoppingcart.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity(name = "User_Table")
@AllArgsConstructor
public class User {

	@GeneratedValue
	@Id
	private long UserId;
	
	
	@Column(name="username")
	private String UserName;


	@Column(name="address")
	public String address;

	@Column(name="password")
	public String password;
	
	@Column(name="phonenumber")
	public long phoneNumber;
	
	
	@Column(name="Email",unique =true)
	public String email;
	
	public User(String userName, String address, String password, long phoneNumber, String email) {
		super();
		UserName = userName;
		this.address = address;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}
	
}
