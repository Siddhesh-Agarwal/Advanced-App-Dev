package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ThemeModel;
import com.example.demo.services.ThemeService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/theme/")
public class ThemeController {
    @Autowired
    private final ThemeService themeService;

    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    @GetMapping("/")
    public ResponseEntity<List<ThemeModel>> getAllThemes() {
        List<ThemeModel> themes = themeService.getDetails();
        return ResponseEntity.ok(themes);
    }

    @GetMapping("/{themeId}")
    public ResponseEntity<Optional<ThemeModel>> getThemeById(@PathVariable int themeId) {
        Optional<ThemeModel> themes = themeService.getById(themeId);
        return ResponseEntity.ok(themes);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/")
    public ResponseEntity<ThemeModel> addProduct(@RequestBody ThemeModel theme) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("User Authorities: " + authentication.getAuthorities());
        ThemeModel savedTheme = themeService.addTheme(theme);
        return ResponseEntity.ok(savedTheme);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{themeId}")
    public ResponseEntity<Optional<ThemeModel>> removeProductByID(@PathVariable int themeId) {
        Optional<ThemeModel> theme = themeService.getById(themeId);
        if (theme.isPresent()) {
            themeService.deleteTheme(themeId);
        }
        return ResponseEntity.ok(theme);
    }
}