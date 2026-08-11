package com.nikhilesh.portfolio_service.dto;

public record ContactRequest(
        String name,
        String email,
        String subject,
        String message
) {
}