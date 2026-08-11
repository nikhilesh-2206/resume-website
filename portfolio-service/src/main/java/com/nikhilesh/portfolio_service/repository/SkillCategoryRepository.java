package com.nikhilesh.portfolio_service.repository;

import com.nikhilesh.portfolio_service.entity.SkillCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SkillCategoryRepository
        extends JpaRepository<SkillCategory, Long> {

    List<SkillCategory> findAllByOrderByDisplayOrderAsc();
}