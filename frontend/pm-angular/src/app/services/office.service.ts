import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Office } from '../models/office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient) { }

  url: String = 'http://localhost:8080/';

  // a GET request for all offices by page
  getOfficesByPage(page: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`http://localhost:8080/office/page?page=${page}&size=10`, { observe: 'response' });
  }

  // a GET request for a single office (by id as a path variable)
  getOfficeById(officeId: number): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:8080/office/' + officeId, { observe : 'response' });
  }

  // // a POST request to create a office (office object in the body)
  createOffice(office: Office): Observable<HttpResponse<any>> {
    return this.http.post('http://localhost:8080/office', office, { observe : 'response' });
  } 

  // // a PUT request to update an office
  updateEmployee(office: Office): Observable<HttpResponse<any>> {
    return this.http.put('http://localhost:8080/office', office, { observe : 'response' });
  }
  
    // a DELETE request to delete a office (by id as a path variable)
    deleteOffice(officeId: number): Observable<HttpResponse<any>> {
      return this.http.delete('http://localhost:8080/office/' + officeId, { observe: 'response'});
    }
}
