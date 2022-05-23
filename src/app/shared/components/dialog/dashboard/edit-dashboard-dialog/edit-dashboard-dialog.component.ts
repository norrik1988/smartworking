import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-edit-dashboard-dialog',
  template: `
    <h2 mat-dialog-title>Edit Position</h2>
    <form #form="ngForm" >
    <div mat-dialog-container>
  
    <mat-form-field > 
      <input matInput type="search" matInput (keyup)="applyFilter($event)">
      <button disabled mat-icon-button matSuffix>
        <mat-icon color="primary">search</mat-icon>
      </button>


    </mat-form-field>

      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Annulla</button>
        <button mat-button  cdkFocusInitial [mat-dialog-close]="data" type='submit'[disabled]="form.invalid" class="addBotton" (click)="edit(form.value)">Modifica</button>
      </div>
    </div>
    </form>
  `,
  styleUrls: ['./edit-dashboard-dialog.component.scss']
})
export class EditDashboardDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, public userService: UserService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(form: NgForm) {
    this.userService.edit(form);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userService.dataSource.filter = filterValue.trim().toLowerCase();

  }
}
