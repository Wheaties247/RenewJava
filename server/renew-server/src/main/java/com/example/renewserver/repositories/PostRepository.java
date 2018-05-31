package com.example.renewserver.repositories;

import com.example.renewserver.models.Post;
import org.springframework.data.repository.CrudRepository;


public interface PostRepository extends CrudRepository<Post, Long> {

}