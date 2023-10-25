import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { User } from "../models/user.model";
import { CookieStorageService } from "./cookie-storage.service";

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient, private cookieStorageService: CookieStorageService) {

    }

    private apiUsers: string = "http://localhost:3000/users"

    // public login(username: string, password: string) {
    //     const xmlHttp = new XMLHttpRequest();

    //     xmlHttp.onreadystatechange = function () {
    //         if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //             console.log(JSON.parse(this.responseText));
    //         }
    //     }

    //     xmlHttp.open("GET", `${this.apiUsers}?username=${username}`);
    //     xmlHttp.send();
    // }

    public login(username: string, password: string): Observable<User> {
        return this.httpClient.get<User[]>(`${this.apiUsers}?username=${username}`).pipe(map((users: User[]) => {
            if(users.length > 1 || users.length === 0)
                return null;

            if(users[0].password === password)
                return users[0];

            return null;
        }));
    }

    public logout() {
        this.cookieStorageService.deleteCookie("isUserLoggedIn");
        this.cookieStorageService.deleteCookie("userRole");
    }
}