import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtentiService } from 'src/app/shared/model/user/service/user.service';

@Component({
  selector: 'app-dialog-delete',
  template: `
    <h2 mat-dialog-title>Install Angular</h2>
<mat-dialog-content class="mat-typography">
<strong>Nominativo : </strong>
    <span>{{utenteService.userAttuale?.nome}}</span>
    <span> {{utenteService.userAttuale?.cognome}}</span>

    <br>

    <strong>Codice fiscale : </strong>
    <span>{{utenteService.userAttuale?.codice_fiscale}}</span>

    <br>

    <strong>Data di Nascita : </strong>
    <span>{{utenteService.userAttuale?.data_di_Nascita}}</span>


</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close (click)="canc()">Cancella</button>
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Annulla</button>
</mat-dialog-actions>
  `,
  styleUrls: ['./dialog-delete.component.scss']
})
export class DeleteDialogComponent {

  constructor(public utenteService: UtentiService, public router: Router) { }


  canc() {
    this.utenteService.delete(this.utenteService.userAttuale);
    this.router.navigateByUrl('users-table');
  }

}
