package com.hoaxify.ws.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.shared.Views;
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
    @JsonView(Views.Base.class)
    private String username;

    @NotNull
    @JsonView(Views.Base.class)

    private  String displayName;

    @NotNull
    @Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")
    @Size(min = 8,max = 255)
    private  String password;

    @JsonView(Views.Base.class)
    private String image;


}
