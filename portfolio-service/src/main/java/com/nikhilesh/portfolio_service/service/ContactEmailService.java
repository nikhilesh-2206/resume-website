package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.dto.ContactRequest;
import com.resend.Resend;
import com.resend.services.emails.model.SendEmailRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ContactEmailService {

    private final Resend resend;

    @Value("${portfolio.email}")
    private String portfolioEmail;

    @Value("${portfolio.email.from}")
    private String portfolioEmailFrom;

    public ContactEmailService(
            @Value("${resend.api-key}") String resendApiKey
    ) {
        this.resend = new Resend(resendApiKey);
    }

    public void sendContactEmail(ContactRequest request) {

        SendEmailRequest emailRequest =
                SendEmailRequest.builder()
                        .from(portfolioEmailFrom)
                        .to(portfolioEmail)
                        .replyTo(request.email().trim())
                        .subject("Portfolio Contact: " + request.subject())
                        .html(
                                """
                                <h2>New Portfolio Contact</h2>

                                <p>
                                    You received a new message from your portfolio website.
                                </p>

                                <hr>

                                <p>
                                    <strong>Name:</strong> %s
                                </p>

                                <p>
                                    <strong>Email:</strong> %s
                                </p>

                                <p>
                                    <strong>Subject:</strong> %s
                                </p>

                                <h3>Message</h3>

                                <p>%s</p>
                                """.formatted(
                                        request.name(),
                                        request.email(),
                                        request.subject(),
                                        request.message()
                                )
                        )
                        .build();

        resend.emails().send(emailRequest);
    }
}