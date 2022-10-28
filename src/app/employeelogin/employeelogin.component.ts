import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']

})
export class EmployeeloginComponent implements OnInit {

  constructor(private api: ApiService,private router:Router) { }

  email = ''
  password = ''

  // employeelogin
  
  fetchEmployee = () => {
    
    let data = {
      email: this.email,
      password: this.password
    }
    this.api.employeeLogin(data).subscribe((response:any) => {
      console.log(response)

      if(response.length>0){
        alert("Login Successfull")
        localStorage.setItem('employee', response[0].name);
        this.router.navigate(["/employeehome"])

      }
      else {
        alert("Invalid Credentials")
      }
    })
  }
  
    
  

  ngOnInit(): void {
  }
}

