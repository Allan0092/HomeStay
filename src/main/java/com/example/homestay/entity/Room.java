package com.example.homestay.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Room")
public class Room {
    @Id
    Integer roomNo;

    @Column(name = "description", nullable = false)
    String description;
    @Column(name = "imagePath", nullable = false)
    String imagePath;
    @Column(name = "capacity", nullable = false)
    Integer capacity;
    @Column(name = "price", nullable = false)
    Float price;
    @Column(name = "available", nullable = false)
    Boolean available;
}
