import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router:Router ) { }

  email = "";
  password = "";

  adminlogin= () => {
    let data = {
      Username: this.email,
      password: this.password
    }

    if (this.email == "admin" && this.password == "12345") {
      this.router.navigate(["/home"])


    }
    else {
      alert("invalid credentials!!!")
    }

    console.log(data)
  }



  ngOnInit(): void {
  }

}
