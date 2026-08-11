package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.entity.SocialLink;
import com.nikhilesh.portfolio_service.repository.SocialLinkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SocialLinkService {

    public SocialLinkRepository socialLinkRepository;

    public SocialLinkService(SocialLinkRepository socialLinkRepository)
    {
        this.socialLinkRepository=socialLinkRepository;
    }


    public List<SocialLink> getAllSocialLinks()
    {
        return socialLinkRepository.findAllByOrderByDisplayOrderAsc();
    }
}
