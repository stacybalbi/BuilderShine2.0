import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  {path:'department-list', component: DepartmentListComponent},
  {path:'department-create', component: DepartmentCreateComponent},
  {path:'department-edit/:id', component: DepartmentEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
