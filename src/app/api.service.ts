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
  addEmployee = (data: any) => {
    return this.http.post('http://localhost:8080/addemployee', data)
  }
  viewEmployee = () => {
    return this.http.get('http://localhost:8080/employeeview')
  }
  deleteEmployee = (id: any) => {
    return this.http.post('http://localhost:8080/deleteemployee',id)
  }
  searchEmployee = (data: any) => {
    return this.http.post('http://localhost:8080/searchemployee', data)
  }
  updateEmployee = (data: any) => {
    return this.http.post('http://localhost:8080/updateemployee', data)
  }
  addSecurity = (data: any) => {
    return this.http.post('http://localhost:8080/securityAdd', data)
  }
  viewSecurity = () => {
    return this.http.get('http://localhost:8080/securityView')
  }
  deleteSecurity = (id: any) => {
    return this.http.post('http://localhost:8080/securityDelete', id)
  }
  searchSecurity = (data: any) => {
    return this.http.post('http://localhost:8080/securitySearch', data)
  }
  updateSecurity = (data: any) => {
    return this.http.post('http://localhost:8080/securityUpdate', data)
  }
  viewLeaves = () => {
    return this.http.get('http://localhost:8080/viewLeave')
  }
  updateLeave = (data: any) => {
    return this.http.post('http://localhost:8080/updateleave', data)
  }

}
