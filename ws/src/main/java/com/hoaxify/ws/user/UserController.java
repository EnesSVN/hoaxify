package com.hoaxify.ws.user;


import com.hoaxify.ws.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {


    @Autowired
    UserService userService;
    @PostMapping(value ="/api/1.0/users")
    @ResponseStatus(HttpStatus.OK)
    //@ResponseStatus(HttpStatus.CREATED)
    public GenericResponse createUser(@RequestBody User user){
        userService.save(user);
        return new GenericResponse("user created");

    }


}
