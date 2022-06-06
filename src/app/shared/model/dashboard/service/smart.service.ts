import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Smart } from "../smart";

@Injectable({
    providedIn: 'root'
})
export class SmartService {
    array: Smart[] = [];
    smart!: Smart;

    constructor(private http: HttpClient) { }

    getAll() {
        this.http.get<Smart[]>('http://localhost:3000/smart').subscribe(res => this.array = res)
    }

    add(smart: Smart) {
        this.http.post<Smart>('http://localhost:3000/smart', smart).subscribe(res => {
            this.array.push(smart);
            this.getAll();
        })
    }

}