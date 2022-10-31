import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  constructor(private api: ApiService) { }
  
  empcode = ''
  type = ''
  reason = ''

  requestLeave = () => {
    let data = {
      "empcode": this.empcode,          
      "type": this.type,
      "reason": this.reason
    }
    this.api.addLeave(data).subscribe((res) => {
      console.log(res)
    })
    alert("Leave Requested Successfully")
    this.empcode = ''
    this.type = ''
    this.reason = ''
  }

  ngOnInit(): void {
  }

}
