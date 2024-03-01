package com.example.homestay;

import com.example.homestay.entity.BookingRequest;
import com.example.homestay.entity.BookingStatus;
import com.example.homestay.entity.Room;
import com.example.homestay.repository.BookingRequestRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;
import java.util.List;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class BookingRepositoryTest {

    @Autowired
    BookingRequestRepository bookingRequestRepository;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void saveBookingRequest(){
        BookingRequest bookingRequest = BookingRequest.builder()
                .customerEmail("test@email.com")
                .roomNo(999)
                .dateOfArrival("03-07-2023")
                .numberOfDays(5)
                .total(15000F)
                .status(BookingStatus.PENDING)
                .build();
        bookingRequest = bookingRequestRepository.save(bookingRequest);

        Assertions.assertThat(bookingRequest.getId()).isGreaterThan(0);

    }

    @Test
    @Order(2)
    public void findById(){
        BookingRequest bookingRequest = bookingRequestRepository.findById(1).get();
        Assertions.assertThat(bookingRequest.getId()).isEqualTo(1);
    }
    @Test
    @Order(3)
    public void findAllData(){
        List<BookingRequest> bookings = bookingRequestRepository.findAll();
        Assertions.assertThat(bookings.size()).isGreaterThan(0);
    }

    @Test
    @Order(4)
    public void updataBookingRequest(){
        BookingRequest bookingRequest = bookingRequestRepository.findAll().get(0);
        BookingStatus prevStatus = bookingRequest.getStatus();
        bookingRequest.setStatus(BookingStatus.APPROVED);
        Assertions.assertThat(bookingRequestRepository.findById(bookingRequest.getId()).get().getStatus()).isNotEqualTo(prevStatus);
    }

    @Test
    @Order(5)
    public void deleteById(){
        List<BookingRequest> bookingRequests = bookingRequestRepository.findAll();
        bookingRequestRepository.deleteById(bookingRequests.get(0).getId());
        Assertions.assertThat(bookingRequestRepository.findById(bookingRequests.get(0).getId()).isEmpty()).isTrue();
    }
}
