import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchEmployee()
  }

  fetchEmployee = () => {
    this.api.viewEmployee().subscribe((res: any) => {this.employee = res})
  }

  deleteEmployee = (id: any) => {
    let data = {
      "id": id
    }

    this.api.deleteEmployee(data).subscribe((res: any) => {
       
    }, () => {

      alert("Successfully deleted")

      this.fetchEmployee()
      }
    )
  }

  
  employee:any= []

  ngOnInit(): void {
  }

}
