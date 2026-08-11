package com.nikhilesh.portfolio_service.controller;

import com.nikhilesh.portfolio_service.entity.Blog;
import com.nikhilesh.portfolio_service.service.BlogService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/blogs")
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping
    public List<Blog> getBlogs() {
        return blogService.getPublishedBlogs();
    }

    @GetMapping("/{slug}")
    public Blog getBlog(@PathVariable String slug) {
        return blogService.getBlogBySlug(slug);
    }
}