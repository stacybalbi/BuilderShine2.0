import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessEditComponent } from './business-edit/business-edit.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusinessEditComponent,
    BusinessListComponent,
    BusinessCreateComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BusinessModule { }
