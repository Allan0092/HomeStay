package com.example.homestay.service.impl;

import com.example.homestay.dto.RoomDTO;
import com.example.homestay.entity.Room;
import com.example.homestay.repository.RoomRepository;
import com.example.homestay.service.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RoomServiceImpl implements RoomService {
    private final RoomRepository roomRepository;
    private final String imageFilePath = "C:\\Users\\allan\\IdeaProjects\\HomeStay\\src\\main\\resources\\Images\\";
    @Override
    public String save(RoomDTO roomDTO) {
        Room room= Room.builder()
                .roomNo(roomDTO.getRoomNo())
                .description(roomDTO.getDescription())
                .imagePath("")
                .capacity(roomDTO.getCapacity())
                .price(roomDTO.getPrice())
                .available(roomDTO.getAvailable())
                .build();

        // for product Image
        MultipartFile multipartFile = roomDTO.getImage();
        String filePath = imageFilePath+multipartFile.getOriginalFilename();
        try{
            multipartFile.transferTo(new File(filePath));
            room.setImagePath(multipartFile.getOriginalFilename());
        }
        catch (Exception e){
            System.out.println("Error saving Image:"+e);
            return e.toString();
        }

        roomRepository.save(room);
        return "Room saved successfully";
    }

    @Override
    public List<Room> getAll() {
        return roomRepository.findAll();
    }

    @Override
    public Optional<Room> getById(Integer id) {
        return roomRepository.findById(id);
    }

    @Override
    public String deleteById(Integer id) {
        roomRepository.deleteById(id);
        return "room deleted successfully";
    }
}
