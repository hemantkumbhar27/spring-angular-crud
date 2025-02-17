package com.pocs.spring_crud_demo.controller;

import com.pocs.spring_crud_demo.entity.Employee;
import com.pocs.spring_crud_demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("save/employee")
    public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee) {
       return ResponseEntity.ok(this.employeeService.saveEmployee(employee));
    }

    @GetMapping("list/employees")
    public ResponseEntity<List<Employee>> getAllEmployees() {
      return   ResponseEntity.ok( this.employeeService.getAllEmployees());
    }

    @GetMapping("get/employee/{employeeId}")
    public ResponseEntity<Employee> getEmployee(@PathVariable  Integer employeeId) {
        return   ResponseEntity.ok( this.employeeService.getEmployee(employeeId));
    }

    @DeleteMapping("delete/employee/{employeeId}")
    public void deleteEmployee(@PathVariable  Integer employeeId) {
       this.employeeService.deleteEmployee(employeeId);
    }

    @PostMapping("update/employee")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) {
       return ResponseEntity.ok( this.employeeService.updateEmployee(employee));
    }
}
