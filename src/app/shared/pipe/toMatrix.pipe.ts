import { Pipe, PipeTransform } from "@angular/core";
import { WorkSpaceService } from "../model/workspace/service/workspace.service";
import { WorkStation } from "../model/workstation/workstation";

@Pipe({
    name: 'toMatrix'
})

export class ToMatrixPipe implements PipeTransform {
    constructor(public workspaceService: WorkSpaceService) { }
    transform(workstations: WorkStation[], n: number): WorkStation[][] {
        const rows = Array.from({ length: Math.ceil(workstations.length / n) }, (_, i) => i);
        return rows.map(idx => workstations.slice(idx * n, idx * n + n));
    }
}