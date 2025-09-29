package com.ems.ems_backend.Controller;

import com.ems.ems_backend.DTO.EmployeeRequestDTO;
import com.ems.ems_backend.DTO.EmployeeResponseDTO;
import com.ems.ems_backend.Service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @GetMapping
    public ResponseEntity<List<EmployeeResponseDTO>> getemployee(){
        return new ResponseEntity<>(employeeService.getallEmployee(), HttpStatus.OK);
    }

    @GetMapping("/{emp_id}")
    public ResponseEntity<EmployeeResponseDTO> getemployeebyid(@PathVariable int emp_id){
        return new ResponseEntity<>(employeeService.getbyID(emp_id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<EmployeeResponseDTO> addEmployee(@RequestBody EmployeeRequestDTO requestDTO){
        return new ResponseEntity<>(employeeService.addEmployee(requestDTO), HttpStatus.CREATED);
    }

//    @PostMapping
//    public ResponseEntity<List<EmployeeResponseDTO>> addEmployee(@RequestBody List<EmployeeRequestDTO> requestDTOlist){
//        List<EmployeeResponseDTO> list = new ArrayList<>();
//        for(EmployeeRequestDTO requestDTO : requestDTOlist){
//            list.add(employeeService.addEmployee(requestDTO));
//        }
//        return new ResponseEntity<>(list, HttpStatus.CREATED);
//    }

    @PutMapping("/{emp_id}")
    public ResponseEntity<EmployeeResponseDTO> updateEmployee(@PathVariable int emp_id,@RequestBody EmployeeRequestDTO requestDTO){
        return new ResponseEntity<>(employeeService.updateEmployee(emp_id,requestDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/{emp_id}")
    public ResponseEntity<String> deleteEmp(@PathVariable int emp_id){
        return new ResponseEntity<>(employeeService.deleteEmployee(emp_id),HttpStatus.OK);
    }

}
