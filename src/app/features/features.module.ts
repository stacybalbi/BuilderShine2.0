import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessModule } from './page/business/business.module';
import { AddressModule } from './page/address/address.module';
import { CostCenterModule } from './page/cost-center/cost-center.module';
import { CountryModule } from './page/country/country.module';
import { DepartmentModule } from './page/department/department.module';
import { DepartmentEmployeeModule } from './page/department-employee/department-employee.module';
import { EmployeeModule } from './page/employee/employee.module';
import { OfficeModule } from './page/office/office.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './page/home/home.module';
import { HeaderComponent } from '../shared/header/header.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    BusinessModule,
    AddressModule,
    CostCenterModule,
    CountryModule,
    DepartmentModule,
    DepartmentEmployeeModule,
    EmployeeModule,
    OfficeModule,
    FeaturesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
