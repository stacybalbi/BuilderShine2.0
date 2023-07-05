import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryCreateComponent } from './country-create/country-create.component';


@NgModule({
  declarations: [
    CountryEditComponent,
    CountryListComponent,
    CountryCreateComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CountryModule { }
