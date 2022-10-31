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
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { TestingComponent } from './testing/testing.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { SearchSecurityComponent } from './search-security/search-security.component';


const routes: Routes = [
  { path: '', component: AdminloginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'home', component: AdminhomeComponent },
  { path: 'employeelogin', component: EmployeeloginComponent },
  { path: 'employeehome', component: EmployeehomeComponent },
  { path: 'securitylogin', component: SecurityloginComponent },
  { path: 'securityhome', component: SecurityhomeComponent },
  { path: 'employeeadd', component: EmployeeAddComponent },
  { path: 'employeeview', component: EmployeeViewComponent },
  { path: 'employeesearch', component: EmployeeSearchComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'addsecurity', component: AddSecurityComponent },
  { path: 'viewsecurity', component: ViewSecurityComponent },
  { path: 'searchsecurity', component: SearchSecurityComponent },
  

 

  
  

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
    SecurityhomeComponent,
    EmployeeAddComponent,
    EmployeeViewComponent,
    EmployeeSearchComponent,
    TestingComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    SearchSecurityComponent
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
