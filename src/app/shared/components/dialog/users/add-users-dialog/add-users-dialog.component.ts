import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtentiService } from 'src/app/shared/model/user/service/user.service';
import { Utente } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-add-users-dialog',
  template: `
     <h2 mat-dialog-title>Add User</h2>
    <form #f="ngForm">
<div mat-dialog-container>
  
  <mat-form-field appearance="outline">
    <mat-label>Nome</mat-label>
    <input matInput type="text" required ngModel  name="nome" placeholder="inserisci nome">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>Cognome</mat-label>
    <input matInput type="text" required ngModel name="cognome" placeholder="inserisci cognome">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>CF</mat-label>
    <input matInput type="text" required ngModel name="codice_fiscale" placeholder="inserisci codice fiscale">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>Data di nascita</mat-label>
    <input matInput type="date" required ngModel name="data_di_Nascita" >
  </mat-form-field>
 
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

  constructor(
    public dialogRef: MatDialogRef<AddUsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Utente,
    public utenteService: UtentiService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(f: NgForm) {
    this.utenteService.add(f.value);
    f.reset();
  }


}
