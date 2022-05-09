import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Utente } from "../../model/user/user";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    utente: Utente[] = [];
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
