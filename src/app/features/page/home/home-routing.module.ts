import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/Helpers/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path:'home', component: HomeComponent,
   canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
