package com.example.homestay.repository;

import com.example.homestay.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <User, Integer> {
    @Query(value = "select * from users where email=?1", nativeQuery = true)
    Optional<User> getUserByUsername(String username);
}
