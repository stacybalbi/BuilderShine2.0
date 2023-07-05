import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryCreateComponent } from './country-create/country-create.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  {path:'country-list', component: CountryListComponent},
  {path:'country-create', component: CountryCreateComponent},
  {path:'country-edit/:id', component: CountryEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
