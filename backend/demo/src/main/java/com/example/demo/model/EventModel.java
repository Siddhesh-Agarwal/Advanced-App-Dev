package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EventModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;
    private String eventName;
    private int attendees;
    private String eventDate;
    private String eventTime;
    @ManyToOne
    @JoinColumn(name = "theme_id")
    @JsonIgnore
    private ThemeModel eventTheme;
    @ManyToOne
    @JsonIgnore
    private UserModel userModel;
}
