package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.dto.ExperienceResponse;
import com.nikhilesh.portfolio_service.entity.Experience;
import com.nikhilesh.portfolio_service.repository.ExperienceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExperienceService {
    public ExperienceRepository experienceRepository;

    public ExperienceService(ExperienceRepository experienceRepository)
    {
        this.experienceRepository=experienceRepository;
    }

   public List<ExperienceResponse> getAllExperience()
   {
       return  experienceRepository.findAllByOrderByDisplayOrderAsc().stream().map(this::toResponse).toList();

   }


   private ExperienceResponse toResponse(Experience experience)
   {
       return new ExperienceResponse(
               experience.getId(),
               experience.getCompanyName(),
               experience.getDesignation(),
               experience.getLocation(),
               experience.getCompanyLogo(),
               experience.getFromDate(),
               experience.getToDate(),
               experience.getSummary(),
               experience.getProjectsWorkDone(),
               experience.getMajorTechnologies(),
               experience.getDisplayOrder()
       );
   }
   

}
