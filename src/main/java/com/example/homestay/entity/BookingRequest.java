package com.example.homestay.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

import java.util.Date;

@Entity
@Table(name = "booking_request")
public class BookingRequest {
    @Id
    @SequenceGenerator(name = "booking_seq_gen", sequenceName = "booking_id_seq", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "booking_seq_gen", strategy = GenerationType.IDENTITY)
    Integer id;

    @Email
    @Column(name = "customer_email")
    String customerEmail;

    @Column(name = "room_number")
    Integer roomNo;

    @Column(name = "date_of_arrival")
    Date dateOfArrival;

    @Column(name = "number_of_days")
    Integer numberOfDays;

    @Column(name = "total")
    Float total;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    BookingStatus status;


}
