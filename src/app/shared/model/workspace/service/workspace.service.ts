import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { WorkStation } from "../../workstation/workstation";
import { WorkSpace } from "../workspace";

export var boh: WorkSpace

@Injectable({
    providedIn: 'root'
})
export class WorkSpaceService {

    constructor(private http: HttpClient) {

    }
    workspace: any;
    id!: number;
    workstationArray: any;
    workstationSelected: WorkStation = {} as WorkStation;
    arrayConcat: any;

    edit_Workstation(form: NgForm, id: number) {
        id = this.id
        this.workstationArray = this.workspace
        for (let i = 0; i < this.workstationArray.workstations.length; i++) {
            if (this.workstationArray.workstations[i].id == id) {
                this.workstationArray.workstations[i] = form.value;
            }
        }
        for (let i = 0; i < this.workstationArray.workstationsTwo.length; i++) {
            if (this.workstationArray.workstationsTwo[i].id == id) {
                this.workstationArray.workstationsTwo[i] = form.value
            }
        }
        for (let i = 0; i < this.workstationArray.workstationsThree.length; i++) {
            if (this.workstationArray.workstationsThree[i].id == id) {
                this.workstationArray.workstationsThree[i] = form.value
            }
        }
        this.http.put<WorkSpace>(`http://localhost:3000/workspace`, this.workstationArray)
            .subscribe(res => {
                this.workspace = res
                this.getWorkspace()
            })
    }

    getWorkspace(): Observable<WorkSpace> {
        return this.http.get<WorkSpace>('http://localhost:3000/workspace');

    }


}