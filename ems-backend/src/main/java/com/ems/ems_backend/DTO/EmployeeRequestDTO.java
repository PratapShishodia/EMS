package com.ems.ems_backend.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;


@Data
public class EmployeeRequestDTO {
    @NotNull(message = "First Name cannot be Null")
    private String firstname;
    private String lastname;
    @Email
    @NotNull(message = "Email Cannot be Null")
    private String email;
}
