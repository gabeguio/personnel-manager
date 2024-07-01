import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  data: any = [];
  employees: any = [];

  constructor(private http: HttpClient) {

    http.get('//localhost:8080/employee/page', { observe: 'response' })
      .subscribe(response => {
        this.data = response.body;

        if (this.data)
          this.employees = this.data.content;
        console.log(this.employees)
      })
  }

}