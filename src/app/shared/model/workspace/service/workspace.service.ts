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
        this.workstationArray = this.workspace
        // console.log('workstationArray 1 ' + JSON.stringify(this.workstationArray))
        //console.log('workstationArray 2 ' + JSON.stringify(this.workstationArray))
        for (let i = 0; i < this.workspace.workstations.length; i++) {
            if (this.workspace.workstations[i].id == id) {
                this.workspace.workstations[i].user = form.value
            }
        }
        for (let i = 0; i < this.workspace.workstationsTwo.length; i++) {
            if (this.workspace.workstationsTwo[i].id == id) {
                this.workspace.workstationsTwo[i].user = form.value
            }
        }
        for (let i = 0; i < this.workspace.workstationsThree.length; i++) {
            if (this.workspace.workstationsThree[i].id == id) {
                this.workspace.workstationsThree[i].user = form.value
            }
        }
        this.arrayConcat = this.workspace.workstations.concat(this.workspace.workstationsTwo, this.workspace.workstationsThree)
        console.log('array Concat  ' + JSON.stringify(this.arrayConcat))
        this.http.put<WorkSpace>(`http://localhost:3000/workspace/1`, this.arrayConcat)
            .subscribe(res => {
                // const index = this.workspace.findIndex(ws => ws.id === id);
                // this.workspace[index] = res
                // this.workspace.push(res)
            })
    }
    // this.http.post<WorkSpace>(`http://localhost:3000/workspace`, this.workspace[0].workstations[i]).subscribe(res => {
    //     this.workspace.push(res)
    // })




    //console.log('workstationArray 2 ' + JSON.stringify(this.workstationArray))

    // this.http.patch<WorkStation>(`http://localhost:3000/workspace/1`, form).subscribe(res => {
    //     const index = this.workspace[0].workstations.findIndex(ws => ws.id === id);
    //     this.workspace[0].workstations[index].user = res.user;
    //     this.workstationArray = this.workspace[0].workstations
    //     this.workstationArray.push(res.user)
    //     console.log('workstationArray 2 ' + JSON.stringify(this.workstationArray))
    // })
    // for (let element of this.workspace[0].workstations) {
    //     if (element.id == id) {
    // this.http.delete(`http://localhost:3000/workspace/1`).subscribe(() => {
    //     this.workspace.splice(0, 1);
    // })
    // console.log('workstationArray 2' + JSON.stringify(this.workstationArray))
    // this.http.post<WorkSpace>(`http://localhost:3000/workspace`, this.workstationArray).subscribe(res => {
    //     this.workspace.push(res)
    // })
    // console.log('WORKSPACE ' + JSON.stringify(this.workspace))
    // console.log('WORKSTATION ARRAY ' + JSON.stringify(this.workstationArray))

    //     }
    // }
    /* this.http.patch<WorkStation>(this.url, form)
                      .subscribe(res => {
                          const index = this.workspace[0].workstations.findIndex(ws => ws.id === id);
                          this.workspace[0].workstations[index].user = res.user;
                          this.workstationArray = this.workspace[0].workstations
                          //  this.workstationArray.push(res.user)
                          console.log('workstationArray ' + JSON.stringify(this.workstationArray))
  
                      })
    */
    getWorkspace(): Observable<WorkSpace> {
        return this.http.get<WorkSpace>('http://localhost:3000/workspace');

    }

}