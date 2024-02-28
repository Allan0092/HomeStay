package com.example.homestay.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoomDTO {
    @NotNull
    Integer roomNo;
    @NotNull
    String description;
    @NotNull
    MultipartFile image;
    @NotNull
    Integer capacity;
    @NotNull
    Float price;
    @NotNull
    Boolean available;
}
