import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';


@NgModule({
  declarations: [
    DepartmentEditComponent,
    DepartmentListComponent,
    DepartmentCreateComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepartmentModule { }
