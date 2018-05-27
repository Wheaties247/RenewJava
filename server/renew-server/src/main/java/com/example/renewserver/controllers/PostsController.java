package com.example.renewserver.controllers;
import com.example.renewserver.models.Post;
import com.example.renewserver.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class PostsController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts")
    public Iterable<Post> findAlPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/posts/{userId}")
    public Iterable<Post> getByUserId(@PathVariable Long userId) {

        return postRepository.getByUserId(userId);
    }
}