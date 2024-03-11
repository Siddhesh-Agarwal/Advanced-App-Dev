package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.AdminModel;
import com.example.demo.model.ThemeModel;
import com.example.demo.repository.AdminRepo;
import com.example.demo.repository.ThemeRepo;

@Service
public class ThemeService {
    @Autowired
    private ThemeRepo themeRepo;

    @Autowired
    private AdminRepo adminRepo;

    public ThemeModel addTheme(ThemeModel theme) {
        return themeRepo.save(theme);
    }

    public String deleteTheme(int themeId) {
        themeRepo.deleteById(themeId);
        return "Successfully deleted";
    }

    public String updateTheme(int themeId, ThemeModel theme) {
        Optional<AdminModel> admin = adminRepo.findById(themeId);
        theme.setAdmin(admin.get());
        themeRepo.save(theme);
        return "Successfully updated";
    }

    public List<ThemeModel> getDetails() {
        List<ThemeModel> arr = themeRepo.findAll();
        return arr;
    }

    public Optional<ThemeModel> getById(int id) {
        Optional<ThemeModel> theme = themeRepo.findById(id);
        return theme;
    }
}
