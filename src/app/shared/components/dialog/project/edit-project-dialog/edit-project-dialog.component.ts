import { Component, OnInit, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Order } from "src/app/shared/model/commessa/order";
import { OrderService } from "src/app/shared/model/commessa/service/order.service";


@Component({
  selector: 'app-edit-project-dialog',
  template: `
  <h2 mat-dialog-title>Edit Project</h2>
  <form #form="ngForm" >
    <div mat-dialog-container>
  
    <mat-form-field appearance="outline">
      <mat-label>Progetto</mat-label>
      <input matInput type="text" required [ngModel]='orderService.orderSelected?.name'  name="name" placeholder="inserisci progetto">
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Descrizione</mat-label>
      <input matInput type="text" required [ngModel]='orderService.orderSelected?.description' name="description" placeholder="inserisci descrizione">
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Commessa</mat-label>
      <input matInput type="text" required [ngModel]='orderService.orderSelected?.order' name="order" placeholder="inserisci commessa">
    </mat-form-field>
    </div>
  
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Annulla</button>
      <button mat-button  cdkFocusInitial [mat-dialog-close]="data" type='submit'[disabled]="form.invalid" class="addBotton" (click)="edit(form.value)">Modifica</button>
    </div>
  </form>
  `,
  styleUrls: ['./edit-project-dialog.component.scss']
})
export class EditProjectDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order,
    public orderService: OrderService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(form: NgForm) {
    this.orderService.edit(form);

  }

}
