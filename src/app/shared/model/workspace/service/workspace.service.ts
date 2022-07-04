import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { WorkStation } from "../../workstation/workstation";
import { WorkSpace } from "../workspace";

@Injectable({
    providedIn: 'root'
})
export class WorkSpaceService {

    constructor(private http: HttpClient) {

    }


    url = `http://localhost:3000/workspace/1`;

    workspace!: WorkSpace[];
    id!: number;
    workstationArray: WorkStation[] = [];
    workstationSelected: WorkStation = {} as WorkStation;
    array !: WorkSpace[];

    edit_Workstation(form: NgForm, id: number) {
        id = this.id
        console.log(form)
        for (let element of this.workspace[0].workstations) {
            if (element.id == id) {
                this.workstationArray = this.workspace[0].workstations
                this.http.patch<WorkStation>(this.url, form)
                    .subscribe(res => {
                        const index = this.workspace[0].workstations.findIndex(ws => ws.id === id);
                        this.workspace[0].workstations[index].user = res.user;
                        this.getWorkspace()
                    })
            }
        }
        console.log(this.workspace[0].workstations);
    }

    getWorkspace(): Observable<WorkSpace[]> {
        return this.http.get<WorkSpace[]>('http://localhost:3000/workspace');

    }

}