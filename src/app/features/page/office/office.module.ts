import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfficeEditComponent } from './office-edit/office-edit.component';
import { OfficeListComponent } from './office-list/office-list.component';
import { OfficeCreateComponent } from './office-create/office-create.component';


@NgModule({
  declarations: [
    OfficeEditComponent,
    OfficeListComponent,
    OfficeCreateComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OfficeModule { }
