package com.nikhilesh.portfolio_service.repository;

import com.nikhilesh.portfolio_service.entity.Achievement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AchievementRepository
        extends JpaRepository<Achievement, Long> {

    List<Achievement> findAllByOrderByDisplayOrderAsc();
}