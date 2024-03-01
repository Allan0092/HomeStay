package com.example.homestay.service;

import com.example.homestay.dto.RoomDTO;
import com.example.homestay.entity.Room;

import java.util.List;
import java.util.Optional;

public interface RoomService {
    String save(RoomDTO roomDTO);

    String changeAvailable(Integer roomNo);
    List<Room> getAll();

    byte[] getImage(Integer roomNum);

    List<Room> getAllAvailable();
    Optional<Room> getById(Integer id);
    String deleteById(Integer id);
}
