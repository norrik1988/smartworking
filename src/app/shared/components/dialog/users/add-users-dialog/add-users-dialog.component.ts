import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-add-users-dialog',
  template: `
     <h2 mat-dialog-title>Add User</h2>
    <form #f="ngForm">
<div mat-dialog-container>
  
  <mat-form-field appearance="outline">
    <mat-label>Nome</mat-label>
    <input matInput type="text" required ngModel  name="name" placeholder="inserisci nome">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>Cognome</mat-label>
    <input matInput type="text" required ngModel name="surname" placeholder="inserisci cognome">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>CF</mat-label>
    <input matInput type="text" required ngModel name="tax_id_code" placeholder="inserisci codice fiscale">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>Data di nascita</mat-label>
    <input matInput type="date" required ngModel name="date" >
  </mat-form-field>

  <mat-form-field appearance="fill">
        <mat-label>Role</mat-label>
        <mat-select [(ngModel)]="role" name="role">
          <mat-option *ngFor="let role of roleList" [value]="role">
            {{role}}
          </mat-option>
        </mat-select>
      </mat-form-field>

    <br>
 
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">Annulla</button>
  <button mat-button  cdkFocusInitial (click)="add(f)" [mat-dialog-close]="data" [disabled]="f.invalid" class="addBotton">inserisci</button>
</div>
</form>
  `,
  styleUrls: ['./add-users-dialog.component.scss']
})
export class AddUsersDialogComponent implements OnInit {

  role = new FormControl();
  roleList: string[] = ['BE Developer', 'FE Developer'];

  constructor(
    public dialogRef: MatDialogRef<AddUsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(f: NgForm) {
    this.userService.add(f.value);
    f.reset();
  }


}
