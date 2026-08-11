package com.nikhilesh.portfolio_service.controller;

import com.nikhilesh.portfolio_service.entity.Achievement;
import com.nikhilesh.portfolio_service.service.AchievementService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/achievements")
public class AchievementController {

    private final AchievementService achievementService;

    public AchievementController(
            AchievementService achievementService) {

        this.achievementService = achievementService;
    }

    @GetMapping
    public List<Achievement> getAchievements() {
        return achievementService.getAllAchievements();
    }
}