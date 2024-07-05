import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../models/employee';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';


@Component({
  selector: 'app-view-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-employees.component.html',
  styleUrl: './view-employees.component.css'
})
export class ViewEmployeesComponent {

  employees: Employee[] = [];
  currentPage: number = 0;
  totalPages: number = 1;
  totalEmployees: number = 0;
  constructor(private employeeService: EmployeeService) {
    this.getEmployeesByPage(this.currentPage);
  }

  getEmployeesByPage(page: number): void {
    this.employeeService.getEmployeesByPage(page)
        .subscribe(response => {
            this.employees = [];
            this.currentPage = response.body.pageNumber;
            this.totalPages = response.body.totalPages;
            this.currentPage = response.body.pageNumber;
            this.totalEmployees = response.body.totalElements;

            for (let item of response.body.content) {
              const officeId = item.office == null ? null : item.office.officeId;
              const tempEmployee: Employee = new Employee(item.employeeId,
                                                          item.firstName,
                                                          item.lastName,
                                                          item.jobTitle,
                                                          item.employmentStatus,
                                                          item.email,
                                                          item.departmentName);  
              tempEmployee.office.officeId = officeId;
              this.employees.push(tempEmployee);
              } 
            }
          );
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.getEmployeesByPage(this.currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.getEmployeesByPage(this.currentPage + 1);
    }
  }
}
