package com.example.homestay.dto;

import com.example.homestay.entity.BookingStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequestDTO {
    Integer id;
    String customer_email;
    Integer roomNo;
    String dateOfArrival;
    Integer NumberOfDays;
    Float total;
    BookingStatus status;
}
