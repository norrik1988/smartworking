import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

class Auth {
  constructor(public email: string, public password: string) {}
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email!: string;
  password!: string;
  hide: boolean = true;
  isLogged: boolean = false;
  loginError: string | undefined;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    localStorage.removeItem('SessionUser');
    localStorage.removeItem('SessionAdmin');
  }

  getLoginError(): string | undefined {
    return this.loginError;
  }

  login(f: NgForm) {
    console.log(f);

    let auth = new Auth(f.value.email, f.value.password);

    this.http.post('http://127.0.0.1:8000/api/account/login', auth).subscribe(
      (data) => {
        console.log(data);


        localStorage.setItem('AuthenticatedEmail', auth.email);
        localStorage.setItem('isAdmin', auth.password);
        this.router.navigate(['/home/dashboard']);
      },
      (error) => {
        console.error(error);
        this.setLoginError("L'utente non è registrato");
      }
    );
  }

  private setLoginError(errorMessage: string) {
    this.loginError = errorMessage;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('AuthenticatedEmail') && !!localStorage.getItem('isAdmin');
  }
}
