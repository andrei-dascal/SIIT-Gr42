import { Component, EventEmitter, Output } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })
  export class MenuComponent {
    @Output() isUserLoggedIn: EventEmitter<void> = new EventEmitter<void>();

    constructor(private userService: UserService) {
    }

    logout() {
      this.userService.logout();
      this.isUserLoggedIn.emit();
    }
  }