package com.nikhilesh.portfolio_service.service;

import com.nikhilesh.portfolio_service.entity.Blog;
import com.nikhilesh.portfolio_service.repository.BlogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    private final BlogRepository blogRepository;

    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public List<Blog> getPublishedBlogs() {
        return blogRepository.findAllByPublishedTrueOrderByDisplayOrderAsc();
    }

    public Blog getBlogBySlug(String slug) {
        return blogRepository
                .findBySlugAndPublishedTrue(slug)
                .orElseThrow(() ->
                        new RuntimeException("Blog not found")
                );
    }
}