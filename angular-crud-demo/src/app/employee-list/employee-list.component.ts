import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeService: EmployeeService;

  displayedColumns: string[] = ['id', 'employeeName', 'employeeContactNumber', 'employeeAddress', 'employeeDepartment',
    'employeeGenrer', 'employeeSkills', 'delete'];
  dataSource: Employee[] = [];

  constructor(employeeService: EmployeeService, private router:Router) {
    this.employeeService = employeeService;
    this.getEmployeeList();
  }
  ngOnInit(): void {

  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      {
        next: (res) => {
          this.getEmployeeList();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }

  editEmployee(id: number): void {
    this.router.navigate(['/employee', {"id":id}] )
    
  }

  getEmployeeList(): void {
    this.employeeService.getEmployeeList().subscribe(
      {
        next: (res: Employee[]) => {
          this.dataSource = res;
          console.log(res);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    )
  }


}
