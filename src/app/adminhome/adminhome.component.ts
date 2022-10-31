import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private api: ApiService) { }
  

  ViewLeave = () => {
    this.api.viewLeaves().subscribe((res: any) => { this.leave = res })
  }

  updateLeave = (id: any, status: string) => {
    let data = {
      "id": id,
      "status": status
    }
    this.api.updateLeave(data).subscribe((res: any) => {
      alert("Leave Updated Successfully")
      this.ViewLeave()
    }, () => {
      alert("Leave Updated Successfully")
      this.ViewLeave()
    });

  }

  leave: any = []

  ngOnInit(): void {
    this.ViewLeave()
  }

}
