import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-edit-dashboard-dialog',
  template: `
    <form class="example-form" #f="ngForm">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>State</mat-label>
    <input matInput
           aria-label="State"
           [matAutocomplete]="auto"
           [(ngModel)]="userSelected"
           (ngModelChange)="inputChange($event)"
           name="userSelected"
           >
    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn" >
      <mat-option *ngFor="let user of filteredUsers" [value]="user">
        <img class="example-option-img" aria-hidden  height="25">
        <span>{{user.name}}</span> |
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>

  <br>

  <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Annulla</button>
        <button id="button-save" mat-button  cdkFocusInitial (click)="add(userSelected)" [mat-dialog-close]="data" [disabled]="f.invalid" class="addBotton"><mat-icon>save</mat-icon> Inserisci</button>
    </div>
</form>
  `,
  styleUrls: ['./edit-dashboard-dialog.component.scss']
})
export class EditDashboardDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditDashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService
  ) {
  }
  userSelected: any;
  filteredUsers = new Array<User>();
  timeoutInput: any;

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
  add(user: User) {
    this.dialogRef.close(user);
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  inputChange(name: any) {
    clearTimeout(this.timeoutInput);
    this.timeoutInput = setTimeout(() => {
      if (typeof name === 'string') {
        this.filteredUsers = name ? this._filterUsers(name) : this.userService.users.slice()
      }
    }, 500);
  }

}
