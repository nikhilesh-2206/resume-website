package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.dto.HeroResponse;
import com.nikhilesh.portfolio_service.entity.Hero;
import com.nikhilesh.portfolio_service.repository.HeroRepository;
import org.springframework.stereotype.Service;

@Service
public class HeroService {
    private final HeroRepository heroRepository;
    public HeroService(HeroRepository heroRepository)
    {
        this.heroRepository=heroRepository;
    }

    public HeroResponse getHero()
    {
        Hero hero= heroRepository.findAll().stream().findFirst().orElseThrow(()->new RuntimeException("Hero not found"));
        return new HeroResponse(
                hero.getId(),
                hero.getName(),
                hero.getRole(),
                hero.getTagline(),
                hero.getDescription(),
                hero.getProfileImage(),
                hero.getResumeUrl(),
                hero.getGithubUrl(),
                hero.getLinkedinUrl(),
                hero.getEmail(),
                hero.getIntroduction()
        );
    }
}
