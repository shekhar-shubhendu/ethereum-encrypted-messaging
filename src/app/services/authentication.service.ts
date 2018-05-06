import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare var Wallet: any;

@Injectable()
export class AuthenticationService {
  private userLoggedIn = false;
  private userAddress: string = null;
  constructor(private router: Router) { }

  public isUserLoggedIn = (): boolean => {
    return this.userLoggedIn;
  }

  public setUserLoggedIn = (value: boolean) => {
    this.userLoggedIn = value;
  }

  public invalidate = () => {
    this.userLoggedIn = false;
    this.userAddress = null;
    this.router.navigate(['/']);
  }

}
