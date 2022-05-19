import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';

@Component({
    selector: 'app-edit-users-dialog',
    template: `
     <h2 mat-dialog-title>Edit User</h2>
    <form #form="ngForm">
<div mat-dialog-container>
  
  <mat-form-field appearance="outline">
    <mat-label>Giorno</mat-label>
    <input matInput type="text" required [ngModel]='registerServise.registerSelected?.day'  name="day" placeholder="inserisci giorno">
  </mat-form-field>

  <mat-form-field appearance="outline">
    <mat-label>Data</mat-label>
    <input matInput type="date" required [ngModel]='registerServise.registerSelected?.date' name="date">
  </mat-form-field>

  <mat-form-field appearance="outline">
    <mat-label>Inizio</mat-label>
    <input matInput type="time" required [ngModel]='registerServise.registerSelected?.start' name="start">
  </mat-form-field>

  <mat-form-field appearance="outline">
    <mat-label>Fine</mat-label>
    <input matInput type="time" [ngModel]='registerServise.registerSelected?.end' name="end" >
  </mat-form-field>

  <mat-form-field appearance="outline">
    <mat-label>Permesso</mat-label>
    <input matInput type="text" [ngModel]='registerServise.registerSelected?.permit' name="permit"  placeholder="inserisci permesso">
  </mat-form-field>
 
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">Annulla</button>
  <button mat-button cdkFocusInitial [mat-dialog-close]="data" type='submit'[disabled]="form.invalid" class="addBotton" (click)="edit(form.value)">Modifica</button>
</div>
</form>
  `,
    styleUrls: ['./edit-registers-dialog.component.scss']
})
export class EditRegistersDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<EditRegistersDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Register,
        public registerServise: RegisterService) { }

    ngOnInit(): void {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    edit(form: NgForm) {
        this.registerServise.edit(form);
    }

}
