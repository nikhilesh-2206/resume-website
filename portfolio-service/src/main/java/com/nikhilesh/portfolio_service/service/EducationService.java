package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.entity.Education;
import com.nikhilesh.portfolio_service.repository.EducationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationService {

    private final EducationRepository educationRepository;

    public EducationService(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    public List<Education> getAllEducation() {
        return educationRepository.findAllByOrderByDisplayOrderAsc();
    }
}
