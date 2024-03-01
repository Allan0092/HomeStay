package com.example.homestay;

import com.example.homestay.entity.BookingRequest;
import com.example.homestay.entity.Room;
import com.example.homestay.repository.RoomRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class RoomRepositoryTest {
    @Autowired
    RoomRepository roomRepository;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void saveRoom(){
        Room room = Room.builder()
                .roomNo(999)
                .description("test description")
                .imagePath("/test/image/path")
                .capacity(99)
                .price(999f)
                .available(false)
                .build();
        room = roomRepository.save(room);
        Assertions.assertThat(room.getRoomNo()).isEqualTo(999);
    }

    @Test
    @Order(2)
    public void findById(){
        Room room = roomRepository.findById(999).get();
        Assertions.assertThat(room.getRoomNo()).isEqualTo(999);
    }
    @Test
    @Order(3)
    public void findAllData(){
        List<Room> rooms = roomRepository.findAll();
        Assertions.assertThat(rooms.size()).isGreaterThan(0);
    }

    @Test
    @Order(4)
    public void updateRoom(){
        Room room = roomRepository.findAll().get(0);
        String prevDescription = room.getDescription();
        room.setDescription("new updated test description");
        roomRepository.save(room);
        Assertions.assertThat(roomRepository.findById(room.getRoomNo()).get()).isNotEqualTo(prevDescription);
    }


    @Test
    @Order(6)
    public void deleteById(){
        List<Room> rooms = roomRepository.findAll();
        roomRepository.deleteById(rooms.get(0).getRoomNo());
        Assertions.assertThat(roomRepository.findById(rooms.get(0).getRoomNo()).isEmpty()).isTrue();
    }
}
