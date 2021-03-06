package com.example.renewserver.controllers;
import com.example.renewserver.models.User;
import com.example.renewserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

//    @GetMapping("/users/{userId}")
//    public Optional<User> findUserById(@PathVariable Long userId) {
//        return userRepository.findById(userId);
//    }
    @PostMapping("/users")
    public User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @DeleteMapping("/users/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.deleteById(userId);
        return HttpStatus.OK;
    }
//    @PatchMapping("/users/{userId}")
//    public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {
//
//        User userFromDb = userRepository.findById(userId).get();
//
//        userFromDb.setUsername(userRequest.getUsername());
//        userFromDb.setPassword(userRequest.getPassword());
//
//        return userRepository.save(userFromDb);
//    }

}