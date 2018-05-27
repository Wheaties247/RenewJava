package com.example.renewserver.repositories;

import com.example.renewserver.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}