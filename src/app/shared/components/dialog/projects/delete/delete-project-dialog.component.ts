import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommessaService } from 'src/app/shared/model/commessa/service/commessa.service';

@Component({
  selector: 'app-delete-project-dialog',
  template: `
  <h2 mat-dialog-title>Add User</h2>
  <mat-dialog-content class="mat-typography">
  
  <strong>Commessa : </strong>
  <span>{{commService.commSelected?.commessa}}</span>

  <br>

  <strong>Progetto : </strong>
  <span>{{commService.commSelected?.progetto}}</span>
  
  <br>

  <strong>Descrizione : </strong>
  <span> {{commService.commSelected?.descrizione}}</span>

  </mat-dialog-content>

  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close (click)="canc()">Cancella</button>
    <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Annulla</button>
  </mat-dialog-actions>
  `,
  styleUrls: ['./delete-project-dialog.component.scss']
})
export class DeleteProjectDialogComponent {

  constructor(public commService: CommessaService, public router: Router) { }

  canc() {
    this.commService.delete(this.commService.commSelected);
    this.router.navigateByUrl('users-table');
  }

}
