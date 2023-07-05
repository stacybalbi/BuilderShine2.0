import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeCreateComponent } from './office-create/office-create.component';
import { OfficeEditComponent } from './office-edit/office-edit.component';
import { OfficeListComponent } from './office-list/office-list.component';

const routes: Routes = [
  {path:'office-list', component: OfficeListComponent},
  {path:'office-create', component: OfficeCreateComponent},
  {path:'office-edit/:id', component: OfficeEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
