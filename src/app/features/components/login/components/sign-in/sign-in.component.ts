import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {

  user!: string;
  password!: string;
  hide: boolean = true;
  isLogged: boolean = false;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    localStorage.removeItem("SessionUser");
    localStorage.removeItem("SessionAdmin");
  }

  goToDashboard(f: NgForm) {
    if (f.value.user === 'admin' && f.value.password === 'admin') {
      localStorage.setItem('SessionAdmin', f.value.user)
      this.authService.admin = true
      this.router.navigateByUrl('home/dashboard');

    } else {
      localStorage.setItem("SessionUser", f.value.user);
      this.authService.admin = false
      this.router.navigateByUrl('home/dashboard');
    }
    this.isLogged = true;
  }

}