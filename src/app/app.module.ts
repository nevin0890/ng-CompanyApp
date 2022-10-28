import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { SecurityhomeComponent } from './securityhome/securityhome.component';


const routes: Routes = [
  { path: '', component: AdminloginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'home', component: AdminhomeComponent },
  { path: 'employeelogin', component: EmployeeloginComponent },
  { path: 'employeehome', component: EmployeehomeComponent },
  { path: 'securitylogin', component: SecurityloginComponent },
  { path: 'securityhome', component: SecurityhomeComponent },
  
  

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminnavbarComponent,
    EmployeeloginComponent,
    SecurityloginComponent,
    EmployeehomeComponent,
    SecurityhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
