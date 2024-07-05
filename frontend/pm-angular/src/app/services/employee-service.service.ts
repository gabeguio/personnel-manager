import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  url: String = 'http://localhost:8080/';

  // a GET request for all employees by page
  getEmployeesByPage(page: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`http://localhost:8080/employee/page?page=${page}&size=10`, { observe: 'response' });
  }

  // a GET request for a single employee (by id as a path variable)
  getEmployeeById(employeeId: number): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:8080/employee/' + employeeId, { observe : 'response' });
  }

  // // a POST request to create a employee (Department object in the body)
  createEmployee(employee: Employee): Observable<HttpResponse<any>> {
    console.log(employee);
    return this.http.post('http://localhost:8080/employee', employee, { observe : 'response' });
  } 

  // // a PUT request to update an employee
  updateEmployee(employee: Employee): Observable<HttpResponse<any>> {
    console.log(employee);
    return this.http.put('http://localhost:8080/employee', employee, { observe : 'response' });
  }
  
    // a DELETE request to delete a employee (by id as a path variable)
    deleteEmployee(employeeId: number): Observable<HttpResponse<any>> {
      return this.http.delete('http://localhost:8080/employee/' + employeeId, { observe: 'response'});
    }
}
