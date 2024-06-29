import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {

  // within the class itself, we can execute JS for our component
  // Variables, Methods, Constructors, Dependencies, etc.

  // Creating a Local Version of State
  // Any will accept any type, but not good in production
  data: any = [];
  employees: any = [];

  // This injects HttpClient for us to use
  // dependency injection
  // the client is a singleton, like services in spring
  constructor(private http: HttpClient) {

    http.get('//localhost:8080/employee/page', { observe: 'response' })
      .subscribe(response => {
        this.data = response.body;

        if (this.data)
          this.employees = this.data.content;
        console.log(this.employees)
      })

    // method that makes a call
  }

}
