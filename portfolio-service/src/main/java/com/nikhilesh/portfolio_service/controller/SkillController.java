package com.nikhilesh.portfolio_service.controller;

import com.nikhilesh.portfolio_service.entity.SkillCategory;
import com.nikhilesh.portfolio_service.service.SkillService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/skills")
public class SkillController {

    private final SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @GetMapping
    public List<SkillCategory> getSkills() {
        return skillService.getAllSkillCategories();
    }
}