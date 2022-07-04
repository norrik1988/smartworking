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

    workspace!: WorkSpace[];
    id! : number;
    workstationArray: WorkStation[] = [];
    workstationSelected: WorkStation = {} as WorkStation;


    edit_Workstation(form: NgForm, id: number) {
        id = this.id
        for ( let element of this.workspace[0].workstations ){
            console.log('element id '+element.id)
            console.log('id '+id)
            if (element.id == id){
                console.log('array '+this.workspace)
                this.http.put<WorkStation>(`http://localhost:3000/workspace/1`, form)
                .subscribe(res => {
                    const index = this.workspace[0].workstations.findIndex(ws => ws.id === id);
                    this.workspace[0].workstations[index] = res;
                    this.getWorkspace();
                    console.log('metodo '+this.getWorkspace())
                })
            }
            console.log(element);
        }
      
        
    }

    getWorkspace(): Observable<WorkSpace[]> {
        return this.http.get<WorkSpace[]>('http://localhost:3000/workspace');

    }

}