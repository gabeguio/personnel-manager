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

  // // a POST request to create a Department (Department object in the body)
  // createDepartment(department: Department): Observable<HttpResponse<any>> {
  //   return this.http.post(this.url + 'department', 
  //                         department,
  //                         // new Department(
  //                         //   123, 'Test Post Department Q', []
  //                         // ),
  //                         // the above is equivalent to this but with an
  //                         // enforced adherence to the Department format
  //                         // { "departmentId": 30,
  //                         //   "departmentName": "Test Post Department X",
  //                         //   "employees": [] }, 
  //                         { observe : 'response' });
  // }

  // // a PUT request to update a Department
  // // request parameters for name and id, List of employees in the body
  // updateDepartment(department: Department): Observable<HttpResponse<any>> {

  //   // assembling an HttpParams object for our request parameters and setting values
  //   let parameters = new HttpParams()
  //                        .set('id', department.departmentId)
  //                        .set('name', department.departmentName);

  // // a PUT request to update an employee
  updateEmployee(employee: Employee): Observable<HttpResponse<any>> {
    console.log(employee);
    return this.http.put('http://localhost:8080/employee', employee, { observe : 'response' });
  }
  
  // // a DELETE request to delete a Department (by id as a path variable)
  // deleteDepartment(departmentId: number): Observable<HttpResponse<any>> {
  //   return this.http.delete(this.url + 'department/' + departmentId, { observe: 'response'});
  // }
}
