package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.entity.Achievement;
import com.nikhilesh.portfolio_service.repository.AchievementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AchievementService {

    private final AchievementRepository achievementRepository;

    public AchievementService(
            AchievementRepository achievementRepository) {

        this.achievementRepository = achievementRepository;
    }

    public List<Achievement> getAllAchievements() {
        return achievementRepository
                .findAllByOrderByDisplayOrderAsc();
    }
}