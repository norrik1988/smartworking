import { Component, Inject, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Order } from "src/app/shared/model/commessa/order";
import { OrderService } from "src/app/shared/model/commessa/service/order.service";


@Component({
  selector: 'app-edit-project-dialog',
  templateUrl: 'edit-project-dialog.component.html',
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
