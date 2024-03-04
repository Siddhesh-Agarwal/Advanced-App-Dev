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

    public ThemeModel addTheme(ThemeModel theme, Integer adminId) {
        Optional<AdminModel> admin = adminRepo.findById(adminId);
        theme.setAdmin(admin.get());
        return themeRepo.save(theme);
    }

    public String deleteTheme(int themeId) {
        themeRepo.deleteById(themeId);
        return "Successfully deleted";
    }

    public String updateTheme(int themeId, ThemeModel theme) {
        themeRepo.save(theme);
        return "Successfully updated";
    }

    public List<ThemeModel> getDetails() {
        List<ThemeModel> arr = new ArrayList<>();
        arr = (List<ThemeModel>) themeRepo.findAll();
        return arr;
    }

    public ThemeModel update(int themeId, ThemeModel theme) {
        ThemeModel themeModal = themeRepo.findById(themeId).get();
        if (Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getThemeName()))) {
            themeModal.setThemeName(theme.getThemeName());
        }
        if (Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getThemeDescription()))) {
            themeModal.setThemeDescription(theme.getThemeDescription());
        }
        if (Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getAddons()))) {
            themeModal.setAddons(theme.getAddons());
        }
        if (Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getThemeImageURL()))) {
            themeModal.setThemeImageURL(theme.getThemeImageURL());
        }
        if (Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getThemeCost()))) {
            themeModal.setThemeCost(theme.getThemeCost());
        }
        if (Objects.nonNull(themeModal) && (!Objects.isNull(themeModal.getFoodItems()))) {
            themeModal.setFoodItems(theme.getFoodItems());
        }
        return themeRepo.save(themeModal);
    }

}
