package com.nikhilesh.portfolio_service.controller;

import com.nikhilesh.portfolio_service.entity.Education;
import com.nikhilesh.portfolio_service.service.EducationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/educations")
public class EducationController {

    private final EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @GetMapping
    public List<Education> getEducation() {
        return educationService.getAllEducation();
    }
}