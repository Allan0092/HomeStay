package com.example.homestay.service.impl;

import com.example.homestay.config.PasswordEncoderUtil;
import com.example.homestay.dto.UserDTO;
import com.example.homestay.entity.User;
import com.example.homestay.repository.UserRepository;
import com.example.homestay.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    @Override
    public String save(UserDTO userDTO) {
        User user = new User();

        if (userDTO.getId()!=null){
            user=userRepository.findById((userDTO.getId())).orElseThrow(() ->new NullPointerException("data not found"));
        }
        user.setEmail(userDTO.getEmail());
        user.setPassword(PasswordEncoderUtil.getInstance().encode(userDTO.getPassword()));

        userRepository.save(user);
        return "Registration success";
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public String deleteById(Integer id) {
        userRepository.deleteById(id);

        return "Account deleted successfully";
    }
}
