import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostCenterCreateComponent } from './cost-center-create/cost-center-create.component';
import { CostCenterEditComponent } from './cost-center-edit/cost-center-edit.component';
import { CostCenterListComponent } from './cost-center-list/cost-center-list.component';

const routes: Routes = [
  {path:'cost-center-list', component: CostCenterListComponent},
  {path:'cost-center-create', component: CostCenterCreateComponent},
  {path:'cost-center-edit/:id', component: CostCenterEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostCenterRoutingModule { }
