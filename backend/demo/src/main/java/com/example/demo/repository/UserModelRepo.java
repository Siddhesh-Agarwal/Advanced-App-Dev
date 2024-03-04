package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;
import com.example.demo.model.UserModel;

public interface UserModelRepo extends JpaRepository<UserModel, Integer> {
    Optional<UserModel> findByUser(User user);

    Optional<UserModel> findByUserEmail(String email);
}
