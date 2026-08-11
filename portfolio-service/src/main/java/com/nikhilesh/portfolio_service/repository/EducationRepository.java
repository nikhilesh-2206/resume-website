package com.nikhilesh.portfolio_service.repository;

import com.nikhilesh.portfolio_service.entity.Education;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EducationRepository extends JpaRepository<Education, Long> {

    List<Education> findAllByOrderByDisplayOrderAsc();
}