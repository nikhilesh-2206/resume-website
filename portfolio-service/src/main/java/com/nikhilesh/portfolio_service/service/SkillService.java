package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.entity.SkillCategory;
import com.nikhilesh.portfolio_service.repository.SkillCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {

    private final SkillCategoryRepository skillCategoryRepository;

    public SkillService(SkillCategoryRepository skillCategoryRepository) {
        this.skillCategoryRepository = skillCategoryRepository;
    }

    public List<SkillCategory> getAllSkillCategories() {
        return skillCategoryRepository.findAllByOrderByDisplayOrderAsc();
    }
}