import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  constructor(private api: ApiService) {

   }
  
  empcode = ''
  
  searchEmployee = () => {
    let data = {
      empcode: this.empcode
    }
    this.api.searchEmployee(data).subscribe((data) => {this.employees = data})
      console.log(data)
    
    
  }

  updateEmployee = () => {
    this.api.updateEmployee(this.employees[0]).subscribe((data) => {
     
    })
    alert("Employee Updated Successfully")
  }


      employees: any = []


  ngOnInit(): void {
  }

}
