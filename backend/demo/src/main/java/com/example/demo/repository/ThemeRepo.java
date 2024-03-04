package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ThemeModel;

public interface ThemeRepo extends JpaRepository<ThemeModel, Integer> {

}
