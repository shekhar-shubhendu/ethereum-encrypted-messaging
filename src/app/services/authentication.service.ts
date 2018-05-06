import { Injectable } from '@angular/core';
declare var Wallet: any;

@Injectable()
export class AuthenticationService {
  private userLoggedIn = false;
  private userAddress: string;
  constructor() { }

  public isUserLoggedIn = (): boolean => {
    return this.userLoggedIn;
  }

  public setUserLoggedIn = (value: boolean) => {
    this.userLoggedIn = value;
  }

}
