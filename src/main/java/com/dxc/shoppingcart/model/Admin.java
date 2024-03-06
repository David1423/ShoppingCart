package com.dxc.shoppingcart.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity(name="adminTable")
public class Admin {

	@Column
	private long adminId;
	@Column
	private String passowrd;
}
