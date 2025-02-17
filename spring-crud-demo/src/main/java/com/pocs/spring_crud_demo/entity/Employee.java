package com.pocs.spring_crud_demo.entity;

import jakarta.persistence.*;
import jdk.jfr.DataAmount;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@Table(name="employee")
@RequiredArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String employeeName;

    private String employeeContactNumber;

    private String employeeAddress;

    private String employeeDepartment;

    private String employeeGenrer;

    private String employeeSkills;

}
