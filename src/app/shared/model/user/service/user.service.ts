import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utente } from '../user';

@Injectable({
    providedIn: 'root'
})
export class UtentiService {
    utenti: Utente[] = [];
    utente!: Utente;
    userAttuale: Utente = {} as Utente;

    constructor(private http: HttpClient) {

    }

    getAll() {
        this.http.get<Utente[]>('http://localhost:3000/utente').subscribe(res => this.utenti = res)
    }

    add(utente: Utente) {
        this.http.post<Utente>(`http://localhost:3000/utente`, utente).subscribe(res => {
            this.utenti.push(res);
        })
    }

    delete(utente: Utente): Utente {
        this.http.delete(`http://localhost:3000/utente/${utente.id}`)
            .subscribe(() => {
                const indice = this.utenti.findIndex(ut => ut.id === utente.id);
                this.utenti.splice(indice, 1);
            })
        return utente
    }

    getUtente(utente: Utente): Utente {
        this.http.get<Utente>(`http://localhost:3000/utente/${utente.id}`).subscribe(res => {
            const index = this.utenti.findIndex(ut => ut.id === utente.id);
            this.utenti[index] = res
            console.log(this.utenti[index])
        })
        return utente
    }

    edit(form: NgForm) {
        this.http.patch<Utente>(`http://localhost:3000/utente/${this.userAttuale?.id}`, form)
            .subscribe(res => {
                const index = this.utenti.findIndex(ut => ut.id === this.userAttuale?.id);
                this.utenti[index] = res;
            });
    }




}
