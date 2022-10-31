import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security',
  templateUrl: './search-security.component.html',
  styleUrls: ['./search-security.component.css']
})
export class SearchSecurityComponent implements OnInit {

  constructor(private api: ApiService) { }

  seuritycode = ''
  
  searchSecurity = () => {
    let user = {
      "seuritycode": this.seuritycode
    }
    this.api.searchSecurity(user).subscribe((data) => {this.security = data
      console.log(data)
    })
  }

  updateSecurity = () => {
    this.api.updateSecurity(this.security[0]).subscribe((data) => {
      console.log(data)
    })
    alert("Security Updated Successfully")
  }



  security: any = []


  ngOnInit(): void {
  }

}
