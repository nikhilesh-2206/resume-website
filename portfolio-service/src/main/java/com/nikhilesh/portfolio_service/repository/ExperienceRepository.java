package com.nikhilesh.portfolio_service.repository;

import com.nikhilesh.portfolio_service.entity.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {

    List<Experience> findAllByOrderByDisplayOrderAsc();
}