import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtentiService } from '../../model/user/service/user.service';
import { Utente } from '../../model/user/user';

@Component({
  selector: 'app-dialog',
  template: `
  <form #f="ngForm">
<div mat-dialog-content>
  
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
    <input matInput type="date" required ngModel name="data_di_nascita" >
  </mat-form-field>
 
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">Annulla</button>
  <button mat-button  cdkFocusInitial (click)="add(f)" [mat-dialog-close]="data" [disabled]="f.invalid" class="addBotton">inserisci</button>
</div>
</form>

  `,
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
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
