package com.example.homestay.service;

import com.example.homestay.dto.UserDTO;
import com.example.homestay.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    String save(UserDTO userDTO);
    List<User> getAll();
    Optional<User> getById(Integer id);
    String deleteById(Integer id);
}
