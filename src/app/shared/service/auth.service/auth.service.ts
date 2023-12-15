import { Injectable} from "@angular/core";
import { User } from "../../model/user/user";


@Injectable({
    providedIn: 'root',
})


export class AuthService {

    // user: User[] = [];
    // flag: boolean = false;
    // admin = false;
    // isAdmin = false;



    constructor() { }

    // getToken(): boolean {
    //   if (localStorage.getItem('SessionUser')) {
    //     return true;
    //   } else if (localStorage.getItem('SessionAdmin')) {
    //     return true;
    //   } else if (localStorage.getItem('AuthenticatedEmail') && localStorage.getItem('AuthenticatedPassword')) {
    //     return true; // L'utente ha email e nome autenticati
    //   } else {
    //     return false; // L'utente non è autenticato
    //   }
    // }

    isLogged(): boolean {
        // if (localStorage.getItem('SessionAdmin')) {
        //     this.flag = false;
        //     this.admin = true;
        //     this.isAdmin = true;
        //     return true
        // }
        // else if (localStorage.getItem('SessionUser')) {
        //     this.flag = true;
        //     this.admin = false;
        //     this.isAdmin = false;
        //     return true;
        // }

        //     this.flag = false;
        //     this.admin = false;
        //     this.isAdmin = false;
        //     return false;

        return true
      }


}
