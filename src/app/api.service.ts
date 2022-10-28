import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
 employeeLogin = (data:any) => {
    return this.http.post('http://localhost:8080/employeeLogin',data)
 }
  securityLogin = (data: any) => {
    return this.http.post('http://localhost:8080/securityLogin', data)
  }
}
