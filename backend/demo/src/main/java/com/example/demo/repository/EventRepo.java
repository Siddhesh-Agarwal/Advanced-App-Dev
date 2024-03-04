package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.EventModel;

public interface EventRepo extends JpaRepository<EventModel, Integer> {
}
