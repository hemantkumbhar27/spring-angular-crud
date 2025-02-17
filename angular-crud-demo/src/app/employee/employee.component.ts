import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: any;
  isCreateEmployee:boolean=true;

  skills:string[] = [];
  employeeService: EmployeeService;
  constructor(employeeService:EmployeeService,  private router:Router,
    private activatedRoute:ActivatedRoute  ) {
    this.employeeService=employeeService;
  }
  ngOnInit(): void {
    this.employee = this.activatedRoute.snapshot.data['employee'];
    console.log(this.employee);

    if(this.employee && this.employee.id>0){
      this.isCreateEmployee = false;

      if(this.employee.employeeSkills !=''){
        this.skills=[];
        this.skills = this.employee.employeeSkills.split(',');

      }
    }else{
      this.isCreateEmployee=true;
    }
  }
  checkSkill(skill:string):boolean
  {
    return this.employee.employeeSkills!=null && this.employee.employeeSkills.includes(skill);

  }
  saveEmployee(employForm: NgForm):void{
    if(this.isCreateEmployee){
      this.employeeService.saveEmployee(this.employee).subscribe(
        {
          next: (res:Employee)=>{
            console.log(res);
            employForm.reset();
            this.skills=[];
            this.employee.employeeSkills='';
            this.employee.employeeGenrer='';
            this.router.navigate(["/list-Employee"])
          },
          error:(err:HttpErrorResponse)=>{
            console.log(err);
          }
        }
      )
    }else{
        this.employeeService.updateEmployee(this.employee).subscribe(
          {
            next: (res:Employee)=>{
         
              this.router.navigate(["/list-Employee"])
            },
            error:(err:HttpErrorResponse)=>{
              console.log(err);
            }
          }
        )
    }
    
  }

  selectGender(gender: string): void {
    this.employee.employeeGenrer = gender;
  }
  onSkillsChanges(event: any): void {
    console.log(event);
    if(event.checked==true){
        this.skills.push(event.source.value);
    }else{
      this.skills.forEach(
        (item,index)=>{
          if(item==event.source.value){
            this.skills.splice(index, 1);
          }
        }
      );
    }
    this.employee.employeeSkills=this.skills.toString();
    
  }

}
