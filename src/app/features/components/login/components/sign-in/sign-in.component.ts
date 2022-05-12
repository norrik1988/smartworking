import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  user: string = "pippo";
  hide: boolean = true;

  constructor(private router: Router) { }
  ngOnInit(): void {
    localStorage.removeItem("SessionUser");
  }

  isLogged: boolean = false;

  goToDashboard(f: NgForm) {

    localStorage.setItem("SessionUser", f.value.user);
    this.isLogged = true
    this.router.navigateByUrl('home/dashboard');
  }

}
