package com.example.renewserver.controllers;
import com.example.renewserver.models.Post;
import com.example.renewserver.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class PostsController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts")
    public Iterable<Post> findAllUsers() {
        return postRepository.findAll();
    }
    @DeleteMapping("/posts/{postId}")
    public HttpStatus deletePostById(@PathVariable Long postId) {
        postRepository.deleteById(postId);
        return HttpStatus.OK;
    }
    @PostMapping("/posts")
    public Post createNewPost(@RequestBody Post newPost) {
        return postRepository.save(newPost);
    }

    @GetMapping("/posts/{postId}")
    public Optional<Post> findUserById(@PathVariable Long postId) {
        return postRepository.findById(postId);
    }//    @GetMapping("/posts/{clientId}")
//    public Iterable<Post> getByClientId(@PathVariable int clientId) {
//
//        return postRepository.getByClientId(clientId);
//    }


    @PatchMapping("/posts/{postId}")
    public Post updatePostById(@PathVariable Long postId, @RequestBody Post postRequest) {

        Post postFromDb = postRepository.findById(postId).get();

        postFromDb.setPart(postRequest.getPart());
        postFromDb.setRetailPrice(postRequest.getRetailPrice());
        postFromDb.setPartAge(postRequest.getPartAge());
//        postFromDb.setClientId(postRequest.getClientId());


        return postRepository.save(postFromDb);
    }

}