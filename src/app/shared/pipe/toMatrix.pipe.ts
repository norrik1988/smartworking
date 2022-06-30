import { Pipe, PipeTransform } from "@angular/core";
import { WorkStation } from "../model/user/user";

@Pipe({
    name: 'toMatrix'
})

export class ToMatrixPipe implements PipeTransform {
    transform(arr: number[], n: number): number[][] {
        const rows = Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => i);
        return rows.map(idx => arr.slice(idx * n, idx * n + n));
    }
}