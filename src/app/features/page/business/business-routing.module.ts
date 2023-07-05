import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { BusinessEditComponent } from './business-edit/business-edit.component';
import { BusinessListComponent } from './business-list/business-list.component';

const routes: Routes = [
  {path:'business-list', component: BusinessListComponent},
  {path:'business-create', component: BusinessCreateComponent},
  {path:'business-edit/:id', component: BusinessEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
