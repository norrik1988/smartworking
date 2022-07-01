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

    constructor(private http: HttpClient) { }

    workspace!: WorkSpace;

    workstationArray: WorkStation[] = [];
    workstationSelected: WorkStation = {} as WorkStation;


    edit_Workstation(form: NgForm) {
        this.http.patch<WorkStation>(`http://localhost:3000/workspace/${this.workstationSelected.id}`, form)
            .subscribe(res => {
                const index = this.workstationArray.findIndex(ws => ws.id === this.workstationSelected?.id);
                this.workstationArray[index] = res;
                this.getWorkspace()
            })
    }

    getWorkspace(): Observable<WorkSpace[]> {
        return this.http.get<WorkSpace[]>('http://localhost:3000/workspace');

    }

}