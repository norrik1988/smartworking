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
    workstationArray: any[] = [];
    workstationSelected: WorkStation = {} as WorkStation;
    array !: any[];

    edit_Workstation(form: NgForm, id: number) {
        id = this.id
        //  this.workstationArray = this.workspace
        this.http.patch<WorkStation>(`http://localhost:3000/workspace/1`, form).subscribe(res => {
            const index = this.workspace[0].workstations.findIndex(ws => ws.id === id);
            this.workspace[0].workstations[index].user = res.user;
            this.workstationArray = this.workspace[0].workstations
            //  this.workstationArray.push(res.user)
            console.log('workstationArray ' + JSON.stringify(this.workstationArray))

        })
        for (let element of this.workspace[0].workstations) {
            if (element.id == id) {

                // this.http.delete(`http://localhost:3000/workspace/1`).subscribe(() => {
                //     this.workspace.splice(0, 1);
                // })
                // this.http.post<WorkSpace>(`http://localhost:3000/workspace`, this.workstationArray).subscribe(res => {
                //     this.workspace.push(res)
                // })
                // console.log('WORKSPACE ' + JSON.stringify(this.workspace))
                // console.log('WORKSTATION ARRAY ' + JSON.stringify(this.workstationArray))
            }
        }
    }
    /* this.http.patch<WorkStation>(this.url, form)
                      .subscribe(res => {
                          const index = this.workspace[0].workstations.findIndex(ws => ws.id === id);
                          this.workspace[0].workstations[index].user = res.user;
                          this.workstationArray = this.workspace[0].workstations
                          //  this.workstationArray.push(res.user)
                          console.log('workstationArray ' + JSON.stringify(this.workstationArray))
  
                      })
    */
    getWorkspace(): Observable<WorkSpace[]> {
        return this.http.get<WorkSpace[]>('http://localhost:3000/workspace');

    }

}