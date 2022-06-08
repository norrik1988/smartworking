import { HttpClient } from '@angular/common/http';
import { Injectable, Input, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    @Input() dateSelected: any;

    users_smart: User[] = [];
    users: User[] = [];
    user!: User;
    userSelected: User = {} as User;

    dataSource!: MatTableDataSource<User>;

    home!: User[];



    constructor(private http: HttpClient) { }

    getAll() {
        this.http.get<User[]>('http://localhost:3000/user').subscribe(res => this.dataSource.data = res);
    }

    getUser() {
        this.http.get<User[]>('http://localhost:3000/user').subscribe(res => this.users = res)

    }

    add(user: User) {
        this.http.post<User>(`http://localhost:3000/user`, user).subscribe(res => {
            this.dataSource.data.push(res);
            this.getAll();
        })
    }

    delete(user: User): User {
        this.http.delete(`http://localhost:3000/user/${user.id}`)
            .subscribe(() => {
                const indice = this.dataSource.data.findIndex(ut => ut.id === user.id);
                this.dataSource.data.splice(indice, 1);
                this.getAll();
            })
        return user
    }

    edit(form: NgForm) {
        this.http.patch<User>(`http://localhost:3000/user/${this.userSelected?.id}`, form)
            .subscribe(res => {
                const index = this.dataSource.data.findIndex(ut => ut.id === this.userSelected?.id);
                this.dataSource.data[index] = res;
                this.getAll();
            });
    }

    getData() {
        return this.dateSelected;
    }




    get_smartWorking() {
        this.http.get<User[]>('http://localhost:3000/smart').subscribe(res => this.users_smart = res);
    }



}
