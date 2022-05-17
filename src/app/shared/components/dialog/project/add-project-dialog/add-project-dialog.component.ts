import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/shared/model/commessa/order';
import { OrderService } from 'src/app/shared/model/commessa/service/order.service';

@Component({
  selector: 'app-add-project-dialog',
  template: `
      <h2 mat-dialog-title>Add Project</h2>
    <form #f="ngForm">
      <div mat-dialog-container>

        <mat-form-field appearance="outline">
          <mat-label>Progetto</mat-label>
          <input matInput type="text" required ngModel  name="name" placeholder="Progetto">
        </mat-form-field>
    
        <mat-form-field appearance="outline">
          <mat-label>Descrizione</mat-label>
          <input matInput type="text" required ngModel name="description" placeholder="Descrizione">
        </mat-form-field>
  
        <mat-form-field appearance="outline">
          <mat-label>Commessa</mat-label>
          <input matInput type="text" required ngModel name="order" placeholder="Commessa">
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
    public orderService: OrderService,
    @Inject(MAT_DIALOG_DATA) public data: Order,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(f: NgForm) {
    this.orderService.add(f.value);
    f.reset();
  }
}
