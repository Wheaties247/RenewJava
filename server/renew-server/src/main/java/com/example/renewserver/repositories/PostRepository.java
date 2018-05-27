package com.example.renewserver.repositories;

import com.example.renewserver.models.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<Post, Long> {
     List<Post> getByUserId(Long userId);

}