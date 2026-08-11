package com.nikhilesh.portfolio_service.controller;

import com.nikhilesh.portfolio_service.dto.ExperienceResponse;
import com.nikhilesh.portfolio_service.entity.Experience;
import com.nikhilesh.portfolio_service.service.ExperienceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/experiences")
public class ExperienceController {
    private ExperienceService experienceService;

    public ExperienceController (ExperienceService experienceService)
    {
        this.experienceService=experienceService;
    }

    @GetMapping
    public List<ExperienceResponse> getAllExperience()
    {
        return experienceService.getAllExperience();
    }
}
