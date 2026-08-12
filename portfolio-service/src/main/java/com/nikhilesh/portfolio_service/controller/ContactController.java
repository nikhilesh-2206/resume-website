package com.nikhilesh.portfolio_service.controller;


import com.nikhilesh.portfolio_service.dto.ContactRequest;
import com.nikhilesh.portfolio_service.service.ContactEmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/contact")
public class ContactController {

    private final ContactEmailService emailService;

    public ContactController(ContactEmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<Void> sendMessage(
            @RequestBody ContactRequest request
    ) {

        emailService.sendContactEmail(request);

        return ResponseEntity.ok().build();
    }
}