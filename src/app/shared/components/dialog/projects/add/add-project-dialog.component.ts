import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Commessa } from 'src/app/shared/model/commessa/commessa';
import { CommessaService } from 'src/app/shared/model/commessa/service/commessa.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'app-add-project-dialog',
  template: `
  <!-- <h2 mat-dialog-title>Add Project</h2> -->
  <form #f="ngForm">
  <div mat-dialog-container >
    
  <!-- <mat-dialog-content class="mat-typography">
  <div fxFlex="100"  fxLayoutGap="20">
  <strong>Commessa  </strong>
    <input  type="text" required ngModel name="commessa" placeholder="Commessa">

  </div>
  <br>

  <div fxFlex="100"  fxLayoutGap="20">
  <strong>Progetto  </strong>
  <input  type="text" required ngModel  name="progetto" placeholder="Progetto">

  </div>
  
  <br>

  <div fxFlex="100"  fxLayoutGap="20">
    <strong>Descrizione  </strong>
    <input  type="text" required ngModel name="descrizione" placeholder="Descrizione">


  </div>

  </mat-dialog-content> --> 

    <!-- <div fxFlex="50" fxFlexAlign="row" fxLayoutGap="20">
      <span>Progetto</span>
    <input matInput type="text" placeholder="Inserisci nome">
    </div>

    <div fxFlexAlign="row" fxLayoutGap="20">
      <span>Commessa</span>
      <input matInput type="text" placeholder="Inserisci nome">
    </div>

    <div fxFlexAlign="row" fxLayoutGap="20">
      <span>Descrizione</span>
      <input matInput type="text" placeholder="Inserisci nome">
    </div> -->

    
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
      <button id="button-save" mat-button  cdkFocusInitial (click)="add(f)" [mat-dialog-close]="data" [disabled]="f.invalid" class="addBotton"><mat-icon>save</mat-icon> Inserisci</button>
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

