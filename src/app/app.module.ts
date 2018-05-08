import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthenticationService } from './services/authentication.service';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { MessagingService } from './services/messaging.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppNavbarComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthenticationService, OnlyLoggedInUsersGuard, IsLoggedInGuard, MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
