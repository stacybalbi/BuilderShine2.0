import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentEmployeeRoutingModule } from './department-employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentEmployeeEditComponent } from './department-employee-edit/department-employee-edit.component';
import { DepartmentEmployeeListComponent } from './department-employee-list/department-employee-list.component';
import { DepartmentEmployeeCreateComponent } from './department-employee-create/department-employee-create.component';


@NgModule({
  declarations: [
    DepartmentEmployeeEditComponent,
    DepartmentEmployeeListComponent,
    DepartmentEmployeeCreateComponent
  ],
  imports: [
    CommonModule,
    DepartmentEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepartmentEmployeeModule { }
