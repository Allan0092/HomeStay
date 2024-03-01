package com.example.homestay.controller;

import com.example.homestay.dto.BookingRequestDTO;
import com.example.homestay.entity.BookingRequest;
import com.example.homestay.service.BookingRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/booking")
public class BookingRequestController {
    private final BookingRequestService bookingRequestService;


    @GetMapping("/data")
    public String getData(){
        return "data recieved";
    }

    @PostMapping("/save")
    public String createData(@RequestBody BookingRequestDTO bookingRequestDTO){
        return bookingRequestService.save(bookingRequestDTO);
    }

    @PostMapping("/updateStatus")
    public String updateStatus(@RequestBody BookingRequestDTO bookingRequestDTO){
        return bookingRequestService.updateStatus(bookingRequestDTO);
    }

    @GetMapping("/getAll")
    public List<BookingRequest> getAllData(){
        return bookingRequestService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<BookingRequest> getById(@PathVariable("id") Integer id){
        return bookingRequestService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable("id") Integer id){
        return bookingRequestService.deleteById(id);
    }
}
