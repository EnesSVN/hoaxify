package com.hoaxify.ws.user;


import javax.validation.Constraint;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@java.lang.annotation.Target({ FIELD})
@java.lang.annotation.Retention(RUNTIME)

@Constraint(validatedBy = {UniqueUsernameValidator.class})
public @interface UniqueUsername {

    java.lang.String message() default "Username must be unique";
    java.lang.Class<?>[] groups() default {};

    java.lang.Class<? extends javax.validation.Payload>[] payload() default {};



}
