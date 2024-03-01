package com.example.homestay.controller;

import com.example.homestay.dto.RoomDTO;
import com.example.homestay.entity.Room;
import com.example.homestay.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
    public String createData(@ModelAttribute RoomDTO roomDTO){
        return roomService.save(roomDTO);
    }

    @GetMapping("/getAll")
    public List<Room> getAllData(){
        return roomService.getAll();
    }

    @GetMapping("/getAllActive")
    public List<Room> getAllActive(){
        return roomService.getAllAvailable();
    }

    @GetMapping("/getImageByName/{roomNum}")
    public ResponseEntity<?> getImageByName(@PathVariable("roomNum") Integer roomNum) {
        byte[] image = roomService.getImage(roomNum);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(image);
    }

    @PostMapping("/changeAvailable/{id}")
    public String changeAvailable(@PathVariable("id") Integer roomNo){return roomService.changeAvailable(roomNo);}

    @GetMapping("/getById/{id}")
    public Optional<Room> getById(@PathVariable("id") Integer id){
        return roomService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable("id") Integer id){
        return roomService.deleteById(id);
    }
}
