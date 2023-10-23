import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Login_Username_Label = "Username";
  Login_Password_Label = "Password";

  loginFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: false
  });

  isLoginFormGroupValid: boolean = true;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  login() {
    if (!this.loginFormGroup.valid) {
      this.isLoginFormGroupValid = false;
      return;
    }

    this.isLoginFormGroupValid = true;

    const username: string = this.loginFormGroup.get('username')?.value;
    const password: string = this.loginFormGroup.get('password')?.value;

    this.userService.login(username, password).subscribe((isLoggedIn: boolean) => {
      console.log(isLoggedIn);
    });

  }
}