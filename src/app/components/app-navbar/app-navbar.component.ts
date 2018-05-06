import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router ) { }

  ngOnInit() {
  }

  doLogout = () => {
    this.authService.setUserLoggedIn(false);
    this.router.navigate(['/']);
  }

}
