import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginForm } from '../../models/login-form';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private fileContent: any;
  public loginForm: LoginForm = {
    filename: '',
    password: ''
  };
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  openFileSelect = (event) => {
    document.getElementById('keyFile').click();
  }

  onFileSelect = (event) => {
    this.loginForm.filename = event.target.value.replace('C:\\fakepath\\', '');
    this.readThis(event.target);
  }

  private readThis = (inputValue: any): void => {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.loginForm.fileContent = myReader.result;
    };
    myReader.readAsText(file);
  }

  public doLogin = (event) => {
    this.authService.processLogin(this.loginForm).subscribe(data => {
      if (!data) {
        alert('Password or File Format incorrect.');
      }
    });
    this.loginForm = {
      filename: '',
      password: ''
    };
  }

}
