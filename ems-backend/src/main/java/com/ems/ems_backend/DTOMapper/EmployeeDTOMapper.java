package com.ems.ems_backend.DTOMapper;


import com.ems.ems_backend.DTO.EmployeeRequestDTO;
import com.ems.ems_backend.DTO.EmployeeResponseDTO;
import com.ems.ems_backend.Entity.Employee;

public class EmployeeDTOMapper {
    public static EmployeeResponseDTO toDTO(Employee employee){
        return new EmployeeResponseDTO(String.valueOf(employee.getEmployeeID()), employee.getFirstname(), employee.getLastname(), employee.getEmail());
    }

    public static Employee toEntity(EmployeeRequestDTO requestDTO){
        Employee employee = new Employee();
        employee.setFirstname(requestDTO.getFirstname());
        employee.setLastname(requestDTO.getLastname());
        employee.setEmail(requestDTO.getEmail());
        return employee;
    }
}
