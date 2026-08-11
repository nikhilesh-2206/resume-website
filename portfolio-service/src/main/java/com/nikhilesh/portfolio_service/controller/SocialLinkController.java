package com.nikhilesh.portfolio_service.controller;

import com.nikhilesh.portfolio_service.entity.SocialLink;
import com.nikhilesh.portfolio_service.service.SocialLinkService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/social-links")
public class SocialLinkController {

    public SocialLinkService socialLinkService;

    public SocialLinkController(SocialLinkService socialLinkService)
    {
        this.socialLinkService=socialLinkService;
    }

    @GetMapping
    public List<SocialLink> getSocialLinks()
    {
        return socialLinkService.getAllSocialLinks();
    }
}
