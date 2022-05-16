import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Utente } from '../user';

@Injectable({
    providedIn: 'root'
})
export class UtentiService {
    utenti: Utente[] = [];
    utente!: Utente;
    userAttuale: Utente = {} as Utente;
    dataSource!: MatTableDataSource<Utente>;

    constructor(private http: HttpClient) {

    }

    getAll() {
        this.http.get<Utente[]>('http://localhost:3000/utente').subscribe(res => this.dataSource.data = res)
    }

    add(utente: Utente) {
        this.http.post<Utente>(`http://localhost:3000/utente`, utente).subscribe(res => {
            this.dataSource.data.push(res);
        })
    }

    delete(utente: Utente): Utente {
        this.http.delete(`http://localhost:3000/utente/${utente.id}`)
            .subscribe(() => {
                const indice = this.dataSource.data.findIndex(ut => ut.id === utente.id);
                this.dataSource.data.splice(indice, 1);
            })
        return utente
    }

    getUtente(utente: Utente): Utente {
        this.http.get<Utente>(`http://localhost:3000/utente/${utente.id}`).subscribe(res => {
            const index = this.dataSource.data.findIndex(ut => ut.id === utente.id);
            this.dataSource.data[index] = res
            console.log(this.utenti[index])
        })
        return utente
    }

    edit(form: NgForm) {
        this.http.patch<Utente>(`http://localhost:3000/utente/${this.userAttuale?.id}`, form)
            .subscribe(res => {
                const index = this.dataSource.data.findIndex(ut => ut.id === this.userAttuale?.id);
                this.dataSource.data[index] = res;
            });
    }




}
