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
    userSelect: any;

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
    delete() {

        this.workstationArray = this.workspace
        this.workstationSelected.user = undefined
        for (let i = 0; i < this.workstationArray.workstations.length; i++) {
            if (this.workstationArray.workstations[i].id == this.id) {
                this.workstationArray.workstations[i].user = this.workstationSelected.user;
            }
        }
        for (let i = 0; i < this.workstationArray.workstationsTwo.length; i++) {
            if (this.workstationArray.workstationsTwo[i].id == this.id) {
                this.workstationArray.workstationsTwo[i].user = this.workstationSelected.user;
            }
        }
        for (let i = 0; i < this.workstationArray.workstationsThree.length; i++) {
            if (this.workstationArray.workstationsThree[i].id == this.id) {
                this.workstationArray.workstationsThree[i].user = this.workstationSelected.user;
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

    test(id: number) {
        for (let i = 0; i < this.workspace.workstations.length; i++) {
            if (this.workspace.workstations[i]?.id == id) {
                this.userSelect = this.workspace.workstations[i]?.user
            }
        }
        for (let i = 0; i < this.workspace.workstationsTwo.length; i++) {
            if (this.workspace.workstationsTwo[i]?.id == id) {
                this.userSelect = this.workspace.workstationsTwo[i]?.user
            }
        }
        for (let i = 0; i < this.workspace.workstationsThree.length; i++) {
            if (this.workspace.workstationsThree[i]?.id == id) {
                this.userSelect = this.workspace.workstationsThree[i]?.user
            }
        }
    }
}