import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';
import { DashboardService } from 'src/app/shared/service/dashboard.service/dashboard.service.service';

@Component({
  selector: 'app-edit-dashboard-dialog',
  templateUrl: './edit-dashboard-dialog.component.html',
  styleUrls: ['./edit-dashboard-dialog.component.scss']
})
export class EditDashboardDialogComponent {

  @Input() userSelected: any;
  filteredUsers = new Array<User>();
  timeoutInput: any;

  role = new FormControl();
  roleList: string[]=['BE Developer','FE Developer'];

  date = new Date();

  constructor(
    public dialogRef: MatDialogRef<EditDashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService,
    public dashService: DashboardService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  filterUsers(value: string): User[] {
    const filterValue = value.toLowerCase();
    return this.userService.users.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  add(user: User) {
    this.dialogRef.close(user);
    this.dashService.add(user);
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  inputChange(name: any) {
    clearTimeout(this.timeoutInput);
    this.timeoutInput = setTimeout(() => {
      if (typeof name === 'string') {
        this.filteredUsers = name ? this.filterUsers(name) : this.userService.users.slice()
      }
    }, 500);
  }

}
