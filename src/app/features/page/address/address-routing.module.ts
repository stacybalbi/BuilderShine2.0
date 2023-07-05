import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressCreateComponent } from './address-create/address-create.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListComponent } from './address-list/address-list.component';

const routes: Routes = [
    {path:'address-list', component: AddressListComponent},
    {path:'address-create', component: AddressCreateComponent},
    {path:'address-edit/:id', component: AddressEditComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
