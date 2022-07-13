import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';


@Component({
  selector: 'app-edit-registers-dialog',
  template: `
     <h2 mat-dialog-title>Edit Register</h2>
    <form #form="ngForm">
<div mat-dialog-container>
  
  

  <mat-form-field appearance="outline">
    <mat-label>Data</mat-label>
    <input matInput type="date" required [ngModel]='registerService.registerSelected?.date' name="date">
  </mat-form-field>

  <mat-form-field appearance="outline">
    <mat-label>Rientro</mat-label>
    <input matInput type="date" required [ngModel]='registerService.registerSelected?.dateEnd' name="dateEnd">
  </mat-form-field>

  <mat-form-field appearance="outline">
    <mat-label>Inizio</mat-label>
    <input matInput type="time" required [ngModel]='registerService.registerSelected?.start' name="start">
  </mat-form-field>

  <mat-form-field appearance="outline">
    <mat-label>Fine</mat-label>
    <input matInput type="time" [ngModel]='registerService.registerSelected?.end' name="end" >
  </mat-form-field>

  <mat-form-field appearance="outline">
            <mat-label>Permesso</mat-label>
            <mat-select required [ngModel]="registerService.registerSelected.permit" name="permit">
                <mat-option *ngFor="let permit of registerService.typePermit" [value]="registerService.registerSelected?.permit">
                  {{registerService.registerSelected.permit}}
                </mat-option>
              </mat-select>
        </mat-form-field>
        <input type="hidden" [ngModel]="registerService.color" name="state">

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
    public registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(form: NgForm) {
    this.registerService.edit(form);
  }

}
