package com.hoaxify.ws.user;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Size(min = 4,max = 255)
    @Column(unique = true)
    @UniqueUsername
    private String username;

    @NotNull
    private  String displayName;

    @NotNull
    @Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")
    @Size(min = 8,max = 255)
    private  String password;


}
