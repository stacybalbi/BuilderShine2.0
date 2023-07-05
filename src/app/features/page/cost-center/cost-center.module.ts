import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostCenterRoutingModule } from './cost-center-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CostCenterEditComponent } from './cost-center-edit/cost-center-edit.component';
import { CostCenterListComponent } from './cost-center-list/cost-center-list.component';
import { CostCenterCreateComponent } from './cost-center-create/cost-center-create.component';


@NgModule({
  declarations: [
    CostCenterEditComponent,
    CostCenterListComponent,
    CostCenterCreateComponent],
  imports: [
    CommonModule,
    CostCenterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CostCenterModule { }
