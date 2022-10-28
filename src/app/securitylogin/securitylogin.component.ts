import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  
  email = ''
  password = ''

  fetchSecurity = () => {
    let data = {
      email: this.email,
      password: this.password
    }
    this.api.securityLogin(data).subscribe((response: any) => {
      console.log(response)

      if (response.length > 0) {
        alert("Login Successfull")
        localStorage.setItem('security', response[0].name);
        this.router.navigate(["/securityhome"])

      }
      else {
        alert("Invalid Credentials")
      }
    })
  }

  ngOnInit(): void {
  }

}
