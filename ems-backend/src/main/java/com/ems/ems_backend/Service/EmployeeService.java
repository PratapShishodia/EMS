package com.ems.ems_backend.Service;

import com.ems.ems_backend.DTO.EmployeeRequestDTO;
import com.ems.ems_backend.DTO.EmployeeResponseDTO;
import com.ems.ems_backend.DTOMapper.EmployeeDTOMapper;
import com.ems.ems_backend.Entity.Employee;
import com.ems.ems_backend.Repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    public List<EmployeeResponseDTO> getallEmployee(){
        List<Employee> employeeList = employeeRepository.findAll();
        return employeeList.stream().map(EmployeeDTOMapper::toDTO).toList();
    }

    public EmployeeResponseDTO getbyID(int emp_id){
        Employee employee = employeeRepository.findById(emp_id).get();
        return EmployeeDTOMapper.toDTO(employee);
    }

    public EmployeeResponseDTO addEmployee(EmployeeRequestDTO requestDTO){
        Employee employee = EmployeeDTOMapper.toEntity(requestDTO);
        if(employeeRepository.existsByEmail(requestDTO.getEmail())){
            throw new RuntimeException("Email already in Use");
        }
        return EmployeeDTOMapper.toDTO(employeeRepository.save(employee));
    }

    public EmployeeResponseDTO updateEmployee(int emp_id,EmployeeRequestDTO requestDTO){
        Employee employee = employeeRepository.findById(emp_id).get();
        if(employeeRepository.existsByEmailAndEmployeeIDNot(requestDTO.getEmail(), emp_id)){
            throw new RuntimeException("Email already in Use");
        }
        employee.setEmail(requestDTO.getEmail());
        employee.setFirstname(requestDTO.getFirstname());
        employee.setLastname(requestDTO.getLastname());
        return EmployeeDTOMapper.toDTO(employeeRepository.save(employee));
    }

    public String deleteEmployee(int emp_id){
        Employee employee = employeeRepository.findById(emp_id).get();
        employeeRepository.delete(employee);
        return "Employee with Id - "+emp_id+" deleted Successfully";
    }

}
