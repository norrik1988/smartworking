import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Commessa } from 'src/app/shared/model/commessa/commessa';
import { CommessaService } from 'src/app/shared/model/commessa/service/commessa.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'app-add-project-dialog',
  template: `
  <form #f="ngForm">
    <div mat-dialog-content>

      <mat-form-field appearance="outline">
        <mat-label>Progetto</mat-label>
        <input matInput type="text" required ngModel  name="progetto" placeholder="Progetto">
      </mat-form-field>
    
      <mat-form-field appearance="outline">
        <mat-label>Descrizione</mat-label>
        <input matInput type="text" required ngModel name="descrizione" placeholder="Descrizione">
      </mat-form-field>
  
      <mat-form-field appearance="outline">
        <mat-label>Commessa</mat-label>
        <input matInput type="text" required ngModel name="commessa" placeholder="Commessa">
      </mat-form-field>
 
    </div>
    
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Annulla</button>
      <button mat-button  cdkFocusInitial (click)="add(f)" [mat-dialog-close]="data" [disabled]="f.invalid" class="addBotton">inserisci</button>
    </div>
  
  </form>
  `,
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddProjectDialogComponent>,
    public commService: CommessaService,
    @Inject(MAT_DIALOG_DATA) public data: Commessa,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(f: NgForm) {
    this.commService.add(f.value);
    f.reset();
  }

}

