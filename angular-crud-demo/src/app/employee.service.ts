import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  api="http://localhost:9090";
  public saveEmployee(employee: Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.api}/save/employee`, employee);
  }

  public getEmployeeList():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.api}/list/employees`);

  }

  public deleteEmployee(id:number){
    return this.httpClient.delete(`${this.api}/delete/employee/${id}`);
  }

  public getEmployee(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.api}/get/employee/${id}`);
  }

  public updateEmployee(employee: Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.api}/update/employee`, employee);
  }
}
