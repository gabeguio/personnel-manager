import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../../services/http.service';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-view-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-employees.component.html',
  styleUrl: './view-employees.component.css'
})
export class ViewEmployeesComponent {

  employees: Employee[] = [];
  currentPage: number = 0;
  totalPages: number = 1;
  totalEmployees: number = 0;
  constructor(private httpService: HttpService) {
    this.getEmployeesByPage(this.currentPage);
  }

  getEmployeesByPage(page: number): void {
    this.httpService.getEmployeesByPage(page)
        .subscribe(response => {
            console.log(response.body)
            this.employees = [];
            this.currentPage = response.body.pageNumber;
            this.totalPages = response.body.totalPages;
            this.currentPage = response.body.pageNumber;
            this.totalEmployees = response.body.totalElements;

            for (let item of response.body.content) {
              console.log(item);
              const officeId = item.office == null ? null : item.office.officeId;
              this.employees.push(
                new Employee(item.employeeId,
                             item.firstName,
                             item.lastName,
                             item.jobTitle,
                             item.employmentStatus,
                             item.email,
                             item.departmentName,
                             officeId)
              );
            }
          
        });
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
