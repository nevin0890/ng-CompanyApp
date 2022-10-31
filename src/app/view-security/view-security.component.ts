import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-security',
  templateUrl: './view-security.component.html',
  styleUrls: ['./view-security.component.css']
})
export class ViewSecurityComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.viewSecurity()


  }

  viewSecurity = () => {
    this.api.viewSecurity().subscribe((res:any) => { this.security = res })
  }


  security: any = []



  deleteSecurity = (id: any) => {
    let user = {
      "id": id
    }

    this.api.deleteSecurity(user).subscribe((data) => {

      console.log(data)

    })
    alert("Successfully deleted")

    this.viewSecurity()
  }

  
  

  ngOnInit(): void {

  }

}

