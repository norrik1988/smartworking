import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtentiService } from 'src/app/shared/model/user/service/user.service';
import { Utente } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-edit-dialog',
  template: `
   <form #form="ngForm" (submit)="edit(form.value)">
<div mat-dialog-content>
  
  <mat-form-field appearance="outline">
    <mat-label>Nome</mat-label>
    <input matInput type="text" required [ngModel]='utenteService.userAttuale?.nome'  name="nome" placeholder="inserisci nome">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>Cognome</mat-label>
    <input matInput type="text" required [ngModel]='utenteService.userAttuale?.cognome' name="cognome" placeholder="inserisci cognome">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>CF</mat-label>
    <input matInput type="text" required [ngModel]='utenteService.userAttuale?.codice_fiscale' name="codice_fiscale" placeholder="inserisci codice fiscale">
  </mat-form-field>
  <mat-form-field appearance="outline">
    <mat-label>Data di nascita</mat-label>
    <input matInput type="date" required [ngModel]='utenteService.userAttuale?.data_di_Nascita' name="data_di_Nascita" >
  </mat-form-field>
 
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">Annulla</button>
  <button mat-button  cdkFocusInitial [mat-dialog-close]="data" type='submit'[disabled]="form.invalid" class="addBotton">Modifica</button>
</div>
</form>
  `,
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Utente,
    public utenteService: UtentiService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(form: NgForm) {
    this.utenteService.edit(form);

  }

}
