import { inject } from "@angular/core"
import { ActivatedRouteSnapshot,ResolveFn, RouterStateSnapshot } from "@angular/router"
import { EmployeeService } from "./employee.service"
import { Observable,of } from "rxjs"
import { Employee } from "./model/employee.model"

export const EmployeeResolver:ResolveFn<any>=
(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    employeeService:EmployeeService=inject(EmployeeService)):Observable<Employee> =>{
        const employeeId=route.paramMap.get("id");
        if(employeeId){
            //make api call and get data for given employee id
            return employeeService.getEmployee(Number(employeeId));
        }else{
            //create and retu

           const employee: Employee = {
                employeeId: 0,
                employeeName: '',
                employeeContactNumber: '',
                employeeAddress: '',
                employeeDepartment: '',
                employeeGenrer: '',
                employeeSkills: ''
              };

              return of(employee);
        }
    }

