package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Themes")
public class ThemeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int themeId;
    private String themeName;
    private String themeImageURL;
    private String themeDescription;
    private long themeCost;
    private String addons;
    private String foodItems;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "admin_id")
    private AdminModel admin;
}
