import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentEmployeeCreateComponent } from './department-employee-create/department-employee-create.component';
import { DepartmentEmployeeEditComponent } from './department-employee-edit/department-employee-edit.component';
import { DepartmentEmployeeListComponent } from './department-employee-list/department-employee-list.component';

const routes: Routes = [
  {path:'department-employee-list', component: DepartmentEmployeeListComponent},
  {path:'department-employee-create', component: DepartmentEmployeeCreateComponent},
  {path:'department-employee-edit/:id', component: DepartmentEmployeeEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentEmployeeRoutingModule { }
