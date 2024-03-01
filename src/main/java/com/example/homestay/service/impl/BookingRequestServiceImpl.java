package com.example.homestay.service.impl;

import com.example.homestay.dto.BookingRequestDTO;
import com.example.homestay.dto.RoomDTO;
import com.example.homestay.entity.BookingRequest;
import com.example.homestay.service.BookingRequestService;

import java.util.List;
import java.util.Optional;

public class BookingRequestServiceImpl implements BookingRequestService {
    @Override
    public String save(BookingRequestDTO bookingRequestDTO) {
        return null;
    }

    @Override
    public List<BookingRequest> getAll() {
        return null;
    }

    @Override
    public Optional<BookingRequest> getById(Integer id) {
        return Optional.empty();
    }

    @Override
    public String deleteById(Integer id) {
        return null;
    }
}
