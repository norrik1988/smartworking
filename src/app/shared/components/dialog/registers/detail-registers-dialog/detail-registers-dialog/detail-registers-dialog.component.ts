import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';

@Component({
  selector: 'app-detail-registers-dialog',
  template: `
  <h2 mat-dialog-title>Detail Register</h2>
 <form #form="ngForm">
<div mat-dialog-container>

<mat-form-field appearance="outline">
 <mat-label>Nome</mat-label>
 <input matInput type="text" [readonly]=true [ngModel]='registerServise.registerSelected?.user?.name' name="name">
</mat-form-field>

<mat-form-field appearance="outline">
 <mat-label>Cognome</mat-label>
 <input matInput type="text" [readonly]=true [ngModel]='registerServise.registerSelected?.user?.surname' name="surname">
</mat-form-field>

<mat-form-field appearance="outline">
 <mat-label>Data</mat-label>
 <input matInput type="date" [readonly]=true [ngModel]='registerServise.registerSelected?.date' name="date">
</mat-form-field>

<mat-form-field appearance="outline">
 <mat-label>Rientro</mat-label>
 <input matInput type="date" [readonly]=true [ngModel]='registerServise.registerSelected?.dateEnd' name="dateEnd">
</mat-form-field>

<mat-form-field appearance="outline">
 <mat-label>Inizio</mat-label>
 <input matInput type="time" [readonly]=true [ngModel]='registerServise.registerSelected?.start' name="start">
</mat-form-field>

<mat-form-field appearance="outline">
 <mat-label>Fine</mat-label>
 <input matInput type="time"  [readonly]=true [ngModel]='registerServise.registerSelected?.end' name="end" >
</mat-form-field>

<mat-form-field appearance="outline">
 <mat-label>Permesso</mat-label>
 <input matInput type="text" [readonly]=true [ngModel]='registerServise.registerSelected?.permit' name="permit"  placeholder="inserisci permesso">
</mat-form-field>

</div>

</form>
`,
  styleUrls: ['./detail-registers-dialog.component.scss']

})
export class DetailRegistersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailRegistersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Register,
    public registerServise: RegisterService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
