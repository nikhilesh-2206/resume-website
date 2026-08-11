package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactEmailService {

    private final JavaMailSender mailSender;

    @Value("${portfolio.email}")
    private String portfolioEmail;

    public ContactEmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(ContactRequest request) {

        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setTo(portfolioEmail);

        mail.setSubject("Portfolio Contact: " + request.subject());

        mail.setText(
                "You received a new message from your portfolio website.\n\n" +
                        "Name: " + request.name() + "\n" +
                        "Email: " + request.email() + "\n" +
                        "Subject: " + request.subject() + "\n\n" +
                        "Message:\n" +
                        request.message()
        );

        mailSender.send(mail);
    }
}