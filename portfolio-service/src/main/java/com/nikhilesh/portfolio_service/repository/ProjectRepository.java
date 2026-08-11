package com.nikhilesh.portfolio_service.repository;

import com.nikhilesh.portfolio_service.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findAllByOrderByDisplayOrderAsc();
}