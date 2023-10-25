import { Component, OnInit } from '@angular/core';
import { CookieStorageService } from './services/cookie-storage.service';
import { UserRole } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  isUserLoggedIn: boolean;
  isAdminLoggedIn: boolean;

  constructor(private cookieStorageService: CookieStorageService) {
  }

  ngOnInit(): void {
    this.initUserData();
  }

  changeUserLoggedInStatus() {
    this.initUserData();
  }

  private initUserData() {
    //This types of data should be sent encoded on a token
    this.isLoggedIn = this.cookieStorageService.getCookie("isUserLoggedIn") === 'true';
    this.isUserLoggedIn = this.isLoggedIn && this.cookieStorageService.getCookie("userRole") === UserRole[UserRole.User];
    this.isAdminLoggedIn = this.isLoggedIn && this.cookieStorageService.getCookie("userRole") ===  UserRole[UserRole.Admin];
  }
}