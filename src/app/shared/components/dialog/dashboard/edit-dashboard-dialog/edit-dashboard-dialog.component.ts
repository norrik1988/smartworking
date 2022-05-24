import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-edit-dashboard-dialog',
  template: `
    <form class="example-form">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>State</mat-label>
    <input matInput
           aria-label="State"
           [matAutocomplete]="auto"
           [formControl]="myFormControl">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let state of filteredUsers | async" [value]="state.name">
        <img class="example-option-img" aria-hidden  height="25">
        <span>{{state.name}}</span> |
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>

  <br>

  <mat-slide-toggle
    [checked]="myFormControl.disabled"
    (change)="myFormControl.disabled ? myFormControl.enable() : myFormControl.disable()">
    Disable Input?
  </mat-slide-toggle>
</form>
  `,
  styleUrls: ['./edit-dashboard-dialog.component.scss']
})
export class EditDashboardDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditDashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, public userService: UserService) {

    this.filteredUsers = this.myFormControl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterUsers(state) : this.userService.users.slice())),
    );
  }
  myFormControl = new FormControl();
  filteredUsers: Observable<User[]>;

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(form: NgForm) {
    this.userService.edit(form);
  }

  private _filterUsers(value: string): User[] {
    const filterValue = value.toLowerCase();
    return this.userService.users.filter(state => state.name.toLowerCase().includes(filterValue));
  }
}
