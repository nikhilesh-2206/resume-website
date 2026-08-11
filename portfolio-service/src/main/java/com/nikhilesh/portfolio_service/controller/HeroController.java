package com.nikhilesh.portfolio_service.controller;

import com.nikhilesh.portfolio_service.dto.HeroResponse;
import com.nikhilesh.portfolio_service.service.HeroService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/hero")
public class HeroController {

    private final HeroService heroService;

    public HeroController (HeroService heroService)
    {
        this.heroService=heroService;
    }

    @GetMapping
    public HeroResponse getHeroService(){
        return heroService.getHero();
    }
}
