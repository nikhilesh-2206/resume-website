package com.nikhilesh.portfolio_service.repository;

import com.nikhilesh.portfolio_service.entity.Hero;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeroRepository extends JpaRepository<Hero,Long> {
}
