import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent implements OnInit {

  constructor(private api: ApiService) { 
this.viewLeaveStatus()
  }

  viewLeaveStatus = () => {
    this.api.viewLeaves().subscribe((res: any) => { this.leave = res })
  }



  leave: any = []
  


  ngOnInit(): void {
  }

}
