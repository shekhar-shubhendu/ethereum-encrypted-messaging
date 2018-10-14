import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthenticationService } from './services/authentication.service';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { MessagingService } from './services/messaging.service';
import { CipherService } from './services/cipher.service';
import { SendUserMessageComponent } from './components/send-user-message/send-user-message.component';
import { ReceiveUserMessageComponent } from './components/receive-user-message/receive-user-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppNavbarComponent,
    UserDashboardComponent,
    SendUserMessageComponent,
    ReceiveUserMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
    AuthenticationService,
    OnlyLoggedInUsersGuard,
    IsLoggedInGuard,
    MessagingService,
    CipherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
