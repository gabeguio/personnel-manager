// view-employee-by-id.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../services/employee-service.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../models/employee';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee-by-id',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-employee-by-id.component.html',
  styleUrl: './view-employee-by-id.component.css'
})
export class ViewEmployeeByIdComponent {
  employee: Employee = new Employee(0,"","","","","","");

  employeeId: number = 0;
  employeName: string = "";

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {
    this.getEmployeeById();
  }

  getEmployeeById() {
    this.employeeService.getEmployeeById(this.route.snapshot.params['id'])
                    .subscribe(data => {

                      this.employeeId = data.body.employeeId;
                      this.employeName = data.body.firstName + " " + data.body.lastName;

                      this.employee.employeeId = data.body.employeeId;
                      this.employee.firstName = data.body.firstName;
                      this.employee.lastName = data.body.lastName;
                      this.employee.jobTitle = data.body.jobTitle == null ? null : data.body.jobTitle;
                      this.employee.employmentStatus = data.body.employmentStatus;
                      this.employee.email = data.body.email;
                      this.employee.departmentName = data.body.departmentName == null ? null : data.body.departmentName;
                      this.employee.office.officeId = data.body.office == null ? null : data.body.office.officeId;
                    });
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee).subscribe(
        {
        next: data => { 
          console.log(data.headers.get('Message')); 
          this.getEmployeeById();
        },
        error: err => {    
          console.log(err.message);
          console.log(err.headers);
        },     
        complete: () => console.log('Complete') 
        } 
    );
  }

  deleteEmployee(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId).subscribe(data => {
      this.router.navigate(['/employees']);
    });
  }

  deleteThisEmployee() {
    this.deleteEmployee(this.employeeId);
  }
}
