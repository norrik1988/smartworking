import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';

@Component({
    selector: 'app-delete-registers-dialog',
    template: `
     <h2 mat-dialog-title>Delete</h2>
<mat-dialog-content class="mat-typography">
<strong>Giorno : </strong>
    <span>{{registerService.registerSelected?.day}}</span>
    <span> {{registerService.registerSelected?.date}}</span>

    <br>

    <strong>Inizio : </strong>
    <span>{{registerService.registerSelected?.start}}</span>

    <br>

    <strong>Fine : </strong>
    <span>{{registerService.registerSelected?.end}}</span>

    <br>

    <strong>Permesso : </strong>
    <span>{{registerService.registerSelected?.permit}}</span>



</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close (click)="delete()">Cancella</button>
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Annulla</button>
</mat-dialog-actions>
  `,
    styleUrls: ['./delete-registers-dialog.component.scss']
})
export class DeleteRegistersDialogComponent {

    constructor(public registerService: RegisterService, public router: Router) { }



    delete() {
        this.registerService.delete(this.registerService.registerSelected);
    }
}
