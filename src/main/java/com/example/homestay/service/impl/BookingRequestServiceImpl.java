package com.example.homestay.service.impl;

import com.example.homestay.dto.BookingRequestDTO;
import com.example.homestay.dto.RoomDTO;
import com.example.homestay.entity.BookingRequest;
import com.example.homestay.entity.BookingStatus;
import com.example.homestay.repository.BookingRequestRepository;
import com.example.homestay.service.BookingRequestService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BookingRequestServiceImpl implements BookingRequestService {
    private final BookingRequestRepository bookingRequestRepository;
    @Override
    public String save(BookingRequestDTO bookingRequestDTO) {
        BookingRequest bookingRequest = BookingRequest.builder()
                .customerEmail(bookingRequestDTO.getCustomer_email())
                .roomNo(bookingRequestDTO.getRoomNo())
                .dateOfArrival(bookingRequestDTO.getDateOfArrival())
                .numberOfDays(bookingRequestDTO.getNumberOfDays())
                .total(bookingRequestDTO.getTotal())
                .status(BookingStatus.PENDING)
                .build();

        bookingRequestRepository.save(bookingRequest);
        return "booking request saved";
    }

    @Override
    public String updateStatus(BookingRequestDTO bookingRequestDTO) {
        /*
        The user will provide id and status in dto
         */

        Optional<BookingRequest> bookingRequest = bookingRequestRepository.findById(bookingRequestDTO.getId());
        if (bookingRequest.isEmpty()){
            return "booking not found";
        }

        bookingRequest.get().setStatus(bookingRequestDTO.getStatus());

        bookingRequestRepository.save(bookingRequest.get());

        return null;
    }

    @Override
    public List<BookingRequest> getAll() {
        return bookingRequestRepository.findAll();
    }

    @Override
    public Optional<BookingRequest> getById(Integer id) {
        return bookingRequestRepository.findById(id);
    }

    @Override
    public String deleteById(Integer id) {
        bookingRequestRepository.deleteById(id);
        return "booking deleted";
    }
}
