import { Component, OnInit } from '@angular/core';
import { CookieStorageService } from './services/cookie-storage.service';
import { UserRole } from './models/user.model';
import { Language } from './models/language.model';
import { TextContent } from './models/text-content.model';
import { TextContentService } from './services/text-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  isUserLoggedIn: boolean;
  isAdminLoggedIn: boolean;
  language: Language;
  imageUrl: string = 'https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960';

  constructor(private cookieStorageService: CookieStorageService, private textContentService: TextContentService) {
  }

  ngOnInit(): void {
    this.language = this.textContentService.defaultLanguage;
    this.initUserData();
  }

  changeUserLoggedInStatus() {
    this.initUserData();
  }

  changeLanguage(isToggledOn: boolean) {
    this.language = isToggledOn ? Language.Romanian : Language.English;
  }

  changeTheme(isToggledOn: boolean) {
  }

  private initUserData() {
    //This types of data should be sent encoded on a token
    this.isLoggedIn = this.cookieStorageService.getCookie("isUserLoggedIn") === 'true';
    this.isUserLoggedIn = this.isLoggedIn && this.cookieStorageService.getCookie("userRole") === UserRole[UserRole.User];
    this.isAdminLoggedIn = this.isLoggedIn && this.cookieStorageService.getCookie("userRole") ===  UserRole[UserRole.Admin];
  }
}