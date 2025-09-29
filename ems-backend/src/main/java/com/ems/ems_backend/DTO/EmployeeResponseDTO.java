package com.ems.ems_backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmployeeResponseDTO {
    private String employeeID;
    private String firstname;
    private String lastname;
    private String email;
}
