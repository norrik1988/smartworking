import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PaginationService {
    users: any;
    p: number = 1;
    total: number = 0;


    constructor(private http: HttpClient) { }

    getProject(page: number) {
        return this.http.get('http://localhost:3000/progetti/' + '?page=' + page)
    }




    getData() {
        this.getProject(this.p)
            .subscribe((result: any) => {
                this.users = result.data;
                this.total = result.total;
            })
    }
    pageChangeEvent(event: number) {
        this.p = event;
        this.getData();
    }
}