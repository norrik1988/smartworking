import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../model/user/user";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    user: User[] = [];
    flag: boolean = false;
    constructor(private router: Router) { }

    getToken(): boolean {
        return !!localStorage.getItem('SessionUser');
    }
    isLogged(): boolean {
        if (localStorage.getItem('SessionUser')) {
            this.flag = true;
            return true;

        }
        this.flag = false;
        return false;
    }

}
