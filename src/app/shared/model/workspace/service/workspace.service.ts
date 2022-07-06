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
        for (let i = 0; i < this.workstationArray.workstations.length; i++) {
            if (this.workstationArray.workstations[i].id == id) {
                this.workstationArray.workstations[i].user = form.value;
                console.log(JSON.stringify(this.workstationArray.workstations))
            }
        }
        for (let i = 0; i < this.workstationArray.workstationsTwo.length; i++) {
            if (this.workstationArray.workstationsTwo[i].id == id) {
                this.workstationArray.workstationsTwo[i].user = form
            }
        }
        for (let i = 0; i < this.workstationArray.workstationsThree.length; i++) {
            if (this.workstationArray.workstationsThree[i].id == id) {
                this.workstationArray.workstationsThree[i].user = form
            }
        }
        this.arrayConcat = this.workspace.workstations.concat(this.workspace.workstationsTwo, this.workspace.workstationsThree)
        console.log('array Concat  ' + JSON.stringify(this.workstationArray))
        // this.http.put<WorkSpace>(`http://localhost:3000/workspace`, this.workstationArray)
        //     .subscribe(res => {
        //         //         //      // const index = this.workspace.findIndex(ws => ws.id === id);
        //         //         //      // this.workspace[index] = res
        //         console.log(res)
        //         this.workspace = res
        //     })
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