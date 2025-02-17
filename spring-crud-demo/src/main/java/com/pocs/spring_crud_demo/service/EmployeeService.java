package com.pocs.spring_crud_demo.service;

import com.pocs.spring_crud_demo.entity.Employee;
import com.pocs.spring_crud_demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
//        List<Employee> employees = new ArrayList<>();
//        employeeRepository.findAll().forEach(employees::add);
//        return employees;
        return employeeRepository.findAll();

    }

    public  Employee getEmployee(Integer id ) {
        return employeeRepository.findById(id).orElseThrow();
    }

    public  void deleteEmployee(Integer id ) {
        employeeRepository.deleteById(id);
    }

    public Employee updateEmployee(Employee employee) {

        employeeRepository.findById(employee.getId()).orElseThrow();
       return employeeRepository.save(employee);
    }
}
