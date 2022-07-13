import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../model/user/user";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    user: User[] = [];
    flag: boolean = false;
    admin = false;
    constructor(private router: Router) { }

    getToken(): boolean {
        if (localStorage.getItem('SessionUser')) {
            return !!localStorage.getItem('SessionUser');
        } else {
            return !!localStorage.getItem('SessionAdmin')
        }
    }
    isLogged(): boolean {
        if (localStorage.getItem('SessionAdmin')) {
            this.flag = true;
            this.admin = true;
            return true
        }
        else if (localStorage.getItem('SessionUser')) {
            this.flag = true;
            return true;
        }
        this.flag = false;
        return false;
    }

}
