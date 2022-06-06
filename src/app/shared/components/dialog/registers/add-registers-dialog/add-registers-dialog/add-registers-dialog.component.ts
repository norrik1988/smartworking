import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';

@Component({
  selector: 'app-add-registers-dialog',
  template: `
     <h2 mat-dialog-title>Add</h2>
    <form #f="ngForm">
<div mat-dialog-container>
  
  <mat-form-field appearance="outline">
    <mat-label>Giorno</mat-label>
    <input matInput type="date" required ngModel name="date">
  </mat-form-field>
 
  
  <mat-form-field appearance="outline">
    <mat-label>Inizio</mat-label>
    <input matInput type="time" required ngModel name="start">
  </mat-form-field>

  <mat-form-field appearance="outline">
    <mat-label>Fine</mat-label>
    <input matInput type="time" ngModel name="end" >
  </mat-form-field>
  
  <mat-form-field appearance="outline">
    <mat-label>Permesso</mat-label>
    <input matInput type="text" ngModel  name="permit" placeholder="inserisci permesso">
  </mat-form-field>
 
</div>
<div mat-dialog-actions>
  <button mat-button (click)="onNoClick()">Annulla</button>
  <button mat-button  cdkFocusInitial (click)="add(f)" [mat-dialog-close]="data" [disabled]="f.invalid" class="addBotton">inserisci</button>
</div>
</form>
  `,
  styleUrls: ['./add-registers-dialog.component.scss']
})
export class AddRegistersDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddRegistersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Register,
    public registerService: RegisterService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(f: NgForm) {
    this.registerService.add(f.value);
    f.reset();
  }


}
