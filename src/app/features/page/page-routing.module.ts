import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/Helpers/auth.guard';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent,
  canActivate: [AuthGuard]},
 
  {
      path: 'address',
      loadChildren: () =>
        import('./address/address.module').then((m) => m.AddressModule),
        component: HeaderComponent,
        canActivate: [AuthGuard]
  },
  {
      path: 'business',
      loadChildren: () =>
        import('./business/business.module').then((m) => m.BusinessModule),
        canActivate: [AuthGuard]
    },

    {
      path: 'cost-center',
      loadChildren: () =>
        import('./cost-center/cost-center.module').then((m) => m.CostCenterModule),
        canActivate: [AuthGuard]
    },
    {
      path: 'country',
      loadChildren: () =>
        import('./country/country.module').then((m) => m.CountryModule),
        canActivate: [AuthGuard]
  },
  {
      path: 'department',
      loadChildren: () =>
        import('./department/department.module').then((m) => m.DepartmentModule),
        canActivate: [AuthGuard]
    },

    {
      path: 'department-employee',
      loadChildren: () =>
        import('./department-employee/department-employee.module').then((m) => m.DepartmentEmployeeModule),
        canActivate: [AuthGuard]
    },
    {
      path: 'employee',
      loadChildren: () =>
        import('./employee/employee.module').then((m) => m.EmployeeModule),
        canActivate: [AuthGuard]
  },
  {
      path: 'office',
      loadChildren: () =>
        import('./office/office.module').then((m) => m.OfficeModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
