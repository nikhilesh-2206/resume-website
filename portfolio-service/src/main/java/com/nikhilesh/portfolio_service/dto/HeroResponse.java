package com.nikhilesh.portfolio_service.dto;

public record HeroResponse(
        Long id,
        String name,
        String role,
        String tagline,
        String description,
        String profileImage,
        String resumeUrl,
        String githubUrl,
        String linkedinUrl,
        String email,
        String introduction
) {
}