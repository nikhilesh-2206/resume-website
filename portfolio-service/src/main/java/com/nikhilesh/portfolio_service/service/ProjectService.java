package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.entity.Project;
import com.nikhilesh.portfolio_service.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;


    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAllByOrderByDisplayOrderAsc();
    }
}