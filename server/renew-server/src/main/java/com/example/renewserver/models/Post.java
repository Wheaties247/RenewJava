package com.example.renewserver.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "POSTS")
public class Post {

    public Post(String part, String retailPrice, String partAge) {
        this.part = part;
        this.retailPrice = retailPrice;
        this.partAge = partAge;
        //this.clientId = clientId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "PART")
    private String part;

    @Column(name = "RETAILPRICE")
    private String retailPrice;

    @Column(name = "PARTAGE")
    private String partAge;

//    @Column(name = "clientId")
//    private int clientId;

//    @OneToOne (mappedBy = "post")
//    User user;

//    public String getPart(){
//        return part;
//    }
//    public String getRetailPrice(){
//        return  retailPrice;
//    }
//    public String getPartAge(){
//        return partAge;
//    }

}