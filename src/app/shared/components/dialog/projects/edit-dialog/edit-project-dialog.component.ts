import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Commessa } from 'src/app/shared/model/commessa/commessa';
import { CommessaService } from 'src/app/shared/model/commessa/service/commessa.service';

@Component({
  selector: 'app-edit-dialog',
  template: `
   <form #form="ngForm" (submit)="edit(form.value)">
    <div mat-dialog-content>
  
      <mat-form-field appearance="outline">
        <mat-label>Progetto</mat-label>
        <input matInput type="text" required [ngModel]='commService.commSelected?.progetto'  name="progetto" placeholder="inserisci progetto">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Descrizione</mat-label>
        <input matInput type="text" required [ngModel]='commService.commSelected?.descrizione' name="descrizione" placeholder="inserisci descrizione">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Commessa</mat-label>
        <input matInput type="text" required [ngModel]='commService.commSelected?.commessa' name="commessa" placeholder="inserisci commessa">
      </mat-form-field>

 
    </div>
    
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Annulla</button>
      <button mat-button  cdkFocusInitial [mat-dialog-close]="data" type='submit'[disabled]="form.invalid" class="addBotton">Modifica</button>
    </div>
  </form>
  `,
  styleUrls: ['./edit-project-dialog.component.scss']
})
export class EditProjectDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Commessa,
    public commService: CommessaService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(form: NgForm) {
    this.commService.edit(form);

  }

}
