package com.example.homestay.controller;

import com.example.homestay.dto.RoomDTO;
import com.example.homestay.entity.Room;
import com.example.homestay.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/room")
@RequiredArgsConstructor
public class RoomController {
    private final RoomService roomService;


    @GetMapping("/data")
    public String getData(){
        return "data recieved";
    }

    @PostMapping("/save")
    public String createData(@RequestBody RoomDTO userDTO){
        return roomService.save(userDTO);
    }

    @GetMapping("/getAll")
    public List<Room> getAllData(){
        return roomService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Room> getById(@PathVariable("id") Integer id){
        return roomService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable("id") Integer id){
        return roomService.deleteById(id);
    }
}
