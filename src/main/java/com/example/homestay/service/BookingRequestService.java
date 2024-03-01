package com.example.homestay.service;


import com.example.homestay.dto.BookingRequestDTO;
import com.example.homestay.dto.RoomDTO;
import com.example.homestay.entity.BookingRequest;

import java.util.List;
import java.util.Optional;

public interface BookingRequestService {
    String save(BookingRequestDTO bookingRequestDTO);
    List<BookingRequest> getAll();
    Optional<BookingRequest> getById(Integer id);
    String deleteById(Integer id);
}
