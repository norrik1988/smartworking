import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/shared/model/commessa/order';
import { OrderService } from 'src/app/shared/model/commessa/service/order.service';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: 'add-project-dialog.component.html',
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
