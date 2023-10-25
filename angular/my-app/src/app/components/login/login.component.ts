import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { CookieStorageService } from 'src/app/services/cookie-storage.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() isUserLoggedIn: EventEmitter<void> = new EventEmitter<void>();

  loginFormGroup: FormGroup;
  invalidUser: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private cookieStorageService: CookieStorageService) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rememberMe: false
    });
  }

  login() {
    if (!this.loginFormGroup.valid) {
      this.invalidUser = true;
      return;
    }

    const username: string = this.loginFormGroup.get('username').value;
    const password: string = this.loginFormGroup.get('password').value;

    this.userService.login(username, password).subscribe((user: User) => {
      const isLoggedIn = user !== null;

      if (isLoggedIn) {
        this.invalidUser = false;
        this.cookieStorageService.setCookie("isUserLoggedIn", "true", 10);
        this.cookieStorageService.setCookie("userRole", user.role.toString(), 10);
        this.isUserLoggedIn.emit();
      } else {
        this.invalidUser = true;
        this.isUserLoggedIn.emit();
      }
    });
  }
}