package com.example.homestay.repository;

import com.example.homestay.entity.BookingRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRequestRepository extends JpaRepository<BookingRequest, Integer> {
}
