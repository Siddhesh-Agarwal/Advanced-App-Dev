package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.EventModel;
import com.example.demo.model.ThemeModel;
import com.example.demo.model.UserModel;
import com.example.demo.repository.EventRepo;
import com.example.demo.repository.ThemeRepo;
import com.example.demo.repository.UserModelRepo;

@Service
public class EventServices {
    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private UserModelRepo userRepo;

    @Autowired
    private ThemeRepo themeRepo;

    public String deleteEvent(int eventId) {
        eventRepo.deleteById(eventId);
        return "Successfully deleted";
    }

    public String updateEvent(int eventId, EventModel event) {
        eventRepo.save(event);
        return "Successfully updated";
    }

    public List<EventModel> getDetails() {
        List<EventModel> arr = new ArrayList<>();
        arr = (List<EventModel>) eventRepo.findAll();
        return arr;
    }

    public EventModel addEvent(EventModel event, Integer userId, Integer themeId) {
        Optional<UserModel> user = userRepo.findById(userId);
        Optional<ThemeModel> theme = themeRepo.findById(themeId);
        event.setUserModel(user.get());
        event.setEventTheme(theme.get());
        // event.setEventTheme();
        return eventRepo.save(event);
    }
}
