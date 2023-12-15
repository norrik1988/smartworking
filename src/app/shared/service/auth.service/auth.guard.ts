import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    // const isAuthenticated = this.authService.getToken();

    // if (isAuthenticated) {

    if (this.authService.isLogged()) { 
      // L'utente è autenticato
      return true;
    }

    // Redirigi l'utente verso la pagina di login
    this.router.navigateByUrl('/home');
    return false;
  }
}

