package com.example.homestay.controller;

import com.example.homestay.dto.UserDTO;
import com.example.homestay.entity.User;
import com.example.homestay.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/data")
    public String getData(){
        return "data recieved";
    }

    @PostMapping("/save")
    public String createData(@RequestBody UserDTO userDTO){
        return userService.save(userDTO);
    }

    @GetMapping("/getAll")
    public List<User> getAllData(){
        return userService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<User> getById(@PathVariable("id") Integer id){
        return userService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable("id") Integer id){
        return userService.deleteById(id);
    }
}
