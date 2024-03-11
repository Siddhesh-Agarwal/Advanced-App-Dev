package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import com.example.demo.model.EventModel;
import com.example.demo.services.EventServices;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/event/")
public class EventController {
    @Autowired
    private EventServices eventServices;

    @PostMapping("/add/{userid}/{themeid}")
    public ResponseEntity<EventModel> addEvent(@RequestBody EventModel event, @PathVariable Integer userid,
            @PathVariable Integer themeid) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("User Authorities: " + authentication.getAuthorities());
        EventModel savedEvent = eventServices.addEvent(event, userid, themeid);
        return ResponseEntity.ok(savedEvent);
    }

    @GetMapping("/getall/")
    public ResponseEntity<List<EventModel>> getAllEvents() {
        List<EventModel> events = eventServices.getDetails();
        return ResponseEntity.ok(events);
    }
}
