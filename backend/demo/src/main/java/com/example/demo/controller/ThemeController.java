package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.EventModel;
import com.example.demo.model.ThemeModel;
import com.example.demo.services.EventServices;
import com.example.demo.services.ThemeService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class ThemeController {
    @Autowired
    private final ThemeService themeService;

    @Autowired
    private final EventServices eventServices;

    public ThemeController(ThemeService themeService, EventServices eventServices) {
        this.themeService = themeService;
        this.eventServices = eventServices;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/get/themes")
    public ResponseEntity<List<ThemeModel>> getAllProducts() {
        List<ThemeModel> themes = themeService.getDetails();
        return ResponseEntity.ok(themes);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/add/theme/{id}")
    public ResponseEntity<ThemeModel> addProduct(@RequestBody ThemeModel theme, @PathVariable Integer id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("User Authorities: " + authentication.getAuthorities());
        ThemeModel savedTheme = themeService.addTheme(theme, id);
        return ResponseEntity.ok(savedTheme);
    }

    @PostMapping("/add/event/{userid}/{themeid}")
    public ResponseEntity<EventModel> addEvent(@RequestBody EventModel event, @PathVariable Integer userid,
            @PathVariable Integer themeid) {
        EventModel savedEvent = eventServices.addEvent(event, userid, themeid);
        return ResponseEntity.ok(savedEvent);
    }

}