import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressCreateComponent } from './address-create/address-create.component';


@NgModule({
  declarations: [
    AddressEditComponent,
    AddressListComponent,
    AddressCreateComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddressModule { }
