import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/Helpers/auth.guard';
import { HeaderComponent } from '../shared/header/header.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  {
    path: 'page',
    loadChildren: () =>
      import('./page/page.module').then((m) => m.PageModule),
      component: HeaderComponent,
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
