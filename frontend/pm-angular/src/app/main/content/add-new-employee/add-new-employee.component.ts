import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee-service.service';
import { Employee } from '../../../models/employee';
import { FormsModule } from '@angular/forms';
import { Office } from '../../../models/office';

@Component({
  selector: 'app-add-new-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-employee.component.html',
  styleUrl: './add-new-employee.component.css'
})
export class AddNewEmployeeComponent {
  employee: Employee = new Employee(0,"","","","","","");

  constructor(private employeeService: EmployeeService) {
  }

  createEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
        {
        next: data => { 
          console.log(data.headers.get('Message')); 
          this.employee = new Employee(0,"","","","","","");
        },
        error: err => {    
          console.log(err.message);
          console.log(err.headers);
        },     
        complete: () => console.log('Complete') 
        } 
    );
  }

}


