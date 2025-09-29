package com.ems.ems_backend.Exceptions;

public class EmailIsAlreadyRegistered extends RuntimeException {
    public EmailIsAlreadyRegistered(String s) {
        super(s);
    }
}
