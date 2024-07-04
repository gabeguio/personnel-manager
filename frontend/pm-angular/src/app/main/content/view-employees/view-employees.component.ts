import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

// HttpCommonModule

@Component({
  selector: 'app-view-employees',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './view-employees.component.html',
  styleUrl: './view-employees.component.css'
})
export class ViewEmployeesComponent {
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