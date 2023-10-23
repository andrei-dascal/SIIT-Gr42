import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {

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

    public login(username: string, password: string): Observable<boolean> {
        return this.httpClient.get<any[]>(`${this.apiUsers}?username=${username}`).pipe(map((users: any[]) => {
            if(users.length > 1 || users.length === 0)
                return false;

            if(users[0].password === password)
                return true;

            return false;
        }));
    }
}