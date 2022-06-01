import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-edit-users-dialog',
  template: `
  
  <h2 mat-dialog-title>Edit User</h2>
  <form #form="ngForm">
    <div mat-dialog-container>
  
      <mat-form-field appearance="outline">
        <mat-label>Nome</mat-label>
        <input matInput type="text" required [ngModel]='userService.userSelected?.name'  name="name" placeholder="inserisci nome">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Cognome</mat-label>
        <input matInput type="text" required [ngModel]='userService.userSelected?.surname' name="surname" placeholder="inserisci cognome">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>CF</mat-label>
        <input matInput type="text" required [ngModel]='userService.userSelected?.tax_id_code' name="tax_id_code" placeholder="inserisci codice fiscale">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Data di nascita</mat-label>
        <input matInput type="date" required [ngModel]='userService.userSelected?.date' name="date" >
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Ruolo</mat-label>
        <input matInput type="text" disabled required [ngModel]='userService.userSelected?.role' name="role" >
      </mat-form-field>
 
    </div>
  
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Annulla</button>
      <button mat-button  cdkFocusInitial [mat-dialog-close]="data" type='submit'[disabled]="form.invalid" class="addBotton" (click)="edit(form.value)">Modifica</button>
    </div>
  </form>

  `,
  styleUrls: ['./edit-users-dialog.component.scss']
})
export class EditUsersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(form: NgForm) {
    this.userService.edit(form);
  }

}
