import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  users: User[] = [];

  getData() {
    this.http.get<User[]>('http://localhost:3000/dashboard').subscribe(
      res => this.users = res
    )
  }

  add(user: User) {
    this.http.post<User>('http://localhost:3000/dashboard', user).subscribe(
      res => {
        this.users.push(res);
      }
    )
  }

}
