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

    workspace!: WorkSpace;
    id!: number;
    workstationArray: any;
    workstationSelected: WorkStation = {} as WorkStation;
    arrayConcat: any;

    edit_Workstation(form: NgForm, id: number) {
        id = this.id
        console.log(form.value)
        this.workstationArray = this.workspace
        for (let i = 0; i < this.workstationArray.workstations.length; i++) {
            if (this.workstationArray.workstations[i].id == id) {
                this.workstationArray.workstations[i] = form.value;
                console.log(JSON.stringify(this.workstationArray.workstations[i].user))
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
        this.arrayConcat = this.workspace.workstations.concat(this.workspace.workstationsTwo, this.workspace.workstationsThree)
        console.log('array Concat  ' + JSON.stringify(this.workstationArray))
        this.http.put<WorkSpace>(`http://localhost:3000/workspace`, this.workstationArray)
            .subscribe(res => {
                this.workspace = res
                this.getAll();
            })
    }

    getWorkspace(): Observable<WorkSpace> {
        return this.http.get<WorkSpace>('http://localhost:3000/workspace');

    }
    getAll() {
        this.http.get<WorkSpace>('http://localhost:3000/workspace').subscribe(res => {
            res = this.workspace = res
        });
    }

}