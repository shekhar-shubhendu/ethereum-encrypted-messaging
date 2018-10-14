import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginForm } from '../models/login-form';
declare var Wallet: any;

@Injectable()
export class AuthenticationService {
  private userLoggedIn = false;
  private wallet: any = null;
  constructor(private router: Router) { }

  public isUserLoggedIn = (): boolean => {
    return this.userLoggedIn;
  }

  public setUserLoggedIn = (value: boolean) => {
    this.userLoggedIn = value;
  }

  public processLogin = (loginForm: LoginForm): Observable<Boolean> => {
    try {
      this.wallet = Wallet.getWalletFromPrivKeyFile(loginForm.fileContent, loginForm.password);
      this.userLoggedIn = true;
      this.router.navigate(['/dashboard']);
    return new Observable(observer => { observer.next(true); } );
    } catch (error) {
      return new Observable(observer => { observer.next(false); } );
    }
  }

  public getWalletDetails = () => {
    return {
      'address': this.wallet.getAddressString(),
      'privateKey': this.wallet.getPrivateKeyString()
    };
  }

  public invalidate = () => {
    this.userLoggedIn = false;
    this.wallet = null;
    this.router.navigate(['/']);
  }

}
