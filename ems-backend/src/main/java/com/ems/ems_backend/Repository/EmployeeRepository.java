package com.ems.ems_backend.Repository;

import com.ems.ems_backend.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
    boolean existsByEmailAndEmployeeIDNot(String email,int emp_id);
    boolean existsByEmail(String email);
}
