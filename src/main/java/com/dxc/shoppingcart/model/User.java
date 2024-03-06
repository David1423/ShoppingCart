package com.dxc.shoppingcart.model;

import org.springframework.lang.NonNull;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity(name = "User_Table")
@AllArgsConstructor
public class User {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	private long UserId;
	
	@NonNull
	@Size(min = 3, message="user name should be minimum of 3 characters")
	@Column(name="username")
	private String userName;

	@Column(name="address")
	public String address;

	//@Pattern(regexp = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{6,18}")
	@Size(min=6,max = 18, message="password lenght should be between 6 to 18 characters")
	@Column(name="password")
	public String password;
	
	@Column(name="phonenumber")
	@Size(min = 10,message = "Phone number should be 10 digits")
	public long phoneNumber;
	
	@Email
	@Column(name="Email",unique =true)
	public String email;
	
	public User(String userName, String address, String password, long phoneNumber, String email) {
		this.userName = userName;
		this.address = address;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}
	
}
