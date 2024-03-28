package com.dxc.scb.Service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.dxc.scb.model.Address;
import com.dxc.scb.model.User;
@Service
public interface UserService {

	

	

	UserDetailsService userDetailsService();

	List<User> getAllUsers();

	Address getAddressByUserId(Long userId);
	void updateUser(Long userId, User updatedUser);

	void deleteUser(Long userId);

	User loadUserById(Long id);
}
