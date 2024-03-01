package com.example.homestay;

import com.example.homestay.entity.User;
import com.example.homestay.repository.UserRepository;
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
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void saveUser(){
        User user = User.builder()
                .password("test123")
                .email("testuser@email.com")
                .build();
        user = userRepository.save(user);
        Assertions.assertThat(user.getId()).isGreaterThan(0);
    }

    @Test
    @Order(2)
    public void findById(){
        User user = userRepository.findById(1400).get();
        Assertions.assertThat(user.getId()).isEqualTo(1400);
    }

    @Test
    @Order(3)
    public void findAllData(){
        List<User> users = userRepository.findAll();
        Assertions.assertThat(users.size()).isGreaterThan(0);
    }

    @Test
    @Order(4)
    public void updateUser(){
        User user = userRepository.findAll().get(0);
        String prevEmail = user.getEmail();
        user.setEmail("updated@email.com");
        userRepository.save(user);
        Assertions.assertThat(userRepository.findById(user.getId()).get().getEmail()).isNotEqualTo(prevEmail);
    }

    @Test
    @Order(5)
    public void deleteById(){
        List<User> users = userRepository.findAll();
        userRepository.deleteById(users.get(0).getId());
        Assertions.assertThat(userRepository.findById(users.get(0).getId()).isEmpty()).isTrue();
    }
}
