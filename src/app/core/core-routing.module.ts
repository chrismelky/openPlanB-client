import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', component: NavComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard] },
      { path: 'users', loadChildren: '../users/users.module#UsersModule', canLoad: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
