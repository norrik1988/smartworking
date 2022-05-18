import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/model/user/service/user.service';

@Component({
  selector: 'app-delete-users-dialog',
  template: `
     <h2 mat-dialog-title>Delete User</h2>
<mat-dialog-content class="mat-typography">
<strong>Nominativo : </strong>
    <span>{{userService.userSelected?.name}}</span>
    <span> {{userService.userSelected?.surname}}</span>

    <br>

    <strong>Codice fiscale : </strong>
    <span>{{userService.userSelected?.tax_id_code}}</span>

    <br>

    <strong>Data di Nascita : </strong>
    <span>{{userService.userSelected?.date}}</span>


</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close (click)="delete()">Cancella</button>
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Annulla</button>
</mat-dialog-actions>
  `,
  styleUrls: ['./delete-users-dialog.component.scss']
})
export class DeleteUsersDialogComponent {

  constructor(public userService: UserService, public router: Router) { }



  delete() {
    this.userService.delete(this.userService.userSelected);
  }
}
