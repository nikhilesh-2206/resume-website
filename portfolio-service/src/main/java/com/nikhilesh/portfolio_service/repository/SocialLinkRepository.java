package com.nikhilesh.portfolio_service.repository;

import com.nikhilesh.portfolio_service.entity.SocialLink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SocialLinkRepository extends JpaRepository<SocialLink,Long> {

    List<SocialLink> findAllByOrderByDisplayOrderAsc();
}
