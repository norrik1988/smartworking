import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Commessa } from "../commessa";

@Injectable({
    providedIn: 'root'
})
export class CommessaService {

    constructor(private http: HttpClient) { }

    array: Commessa[] = [];
    commSelected: Commessa = {} as Commessa;

    getAll() {
        this.http.get<Commessa[]>('http://localhost:3000/progetti')
            .subscribe(res => this.array = res)
    }

    add(comm: Commessa) {
        this.http.post<Commessa>(`http://localhost:3000/progetti`, comm)
            .subscribe(res => {
                this.array.push(res);
            })
    }

    delete(comm: Commessa): Commessa {
        this.http.delete(`http://localhost:3000/progetti/${comm.id}`)
            .subscribe(() => {
                const indice = this.array.findIndex(c => c.id === comm.id)
                this.array.splice(indice, 1);
            })
        return comm;
    }

    getComm(comm: Commessa): Commessa {
        this.http.get(`http://localhost:3000/progetti/${comm.id}`)
            .subscribe(result => {
                const indice = this.array.findIndex(c => c.id === comm.id)
                this.array[indice] === result;
                console.log(this.array[indice])
            })
        return comm;
    }


    edit(form: NgForm) {
        this.http.patch<Commessa>(`http://localhost:3000/progetti/${this.commSelected?.id}`, form)
            .subscribe(res => {
                const index = this.array.findIndex(cm => cm.id === this.commSelected?.id);
                this.array[index] = res;
            });
    }



}