import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { AlwaysAuthGuard } from './guards/always-auth.guard';

const routes: Routes = [
  {path: '', canActivate: [AlwaysAuthGuard], component: LoginComponent},
  {path: 'dashboard', canActivate: [OnlyLoggedInUsersGuard], component: UserDashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
