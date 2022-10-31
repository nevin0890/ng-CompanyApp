import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent implements OnInit {


  constructor(private api:ApiService) { }

  name = ''
  seuritycode = ''
  dob = ''
  phone = ''
  email = ''
  password = ''

  addSecurity = () => {
    let security = {
      name: this.name,
      seuritycode: this.seuritycode,
      dob: this.dob,
      phone: this.phone,
      email: this.email,
      password: this.password
    }

    this.api.addSecurity(security).subscribe((data) => {
      console.log(data)
    })
    this.name = ''
    this.seuritycode = ''
    this.dob = ''
    this.phone = ''
    this.email = ''
    this.password = ''
    alert("Security Added Successfully")
  }




  ngOnInit(): void {
  }

}
