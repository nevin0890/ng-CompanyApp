import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  

  name = ''
  empcode = ''
  designation = ''
  dob = ''
  doj = ''
  phone = ''
  address = ''
  email = ''
  password = ''

  fetchEmployee = () => {
    let data = {
      name: this.name,
      empcode: this.empcode,
      designation: this.designation,
      dob: this.dob,
      doj: this.doj,
      phone: this.phone,
      address: this.address,
      email: this.email,
      password: this.password
    }
    this.api.addEmployee(data).subscribe((res: any) => {
      console.log(res)
    

    })
    this.name = ''
    this.empcode = ''
    this.designation = ''
    this.dob = ''
    this.doj = ''
    this.phone = ''
    this.address = ''
    this.email = ''
    this.password = ''
    alert("Employee Added Successfully")
  }
  ngOnInit(): void {
  }

}
