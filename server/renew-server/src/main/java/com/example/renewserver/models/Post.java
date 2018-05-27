package com.example.renewserver.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "POSTS")
public class Post {

    public Post(String part, String retailPrice, String partAge, Long userId) {
        this.part = part;
        this.retailPrice = retailPrice;
        this.partAge = partAge;
        this.userId = userId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "part")
    private String part;

    @Column(name = "retail_price")
    private String retailPrice;

    @Column(name = "part_age")
    private String partAge;

    @Column(name = "user_Id")
    private Long userId;

    @OneToOne (mappedBy = "post")
    User user;

}