import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User, WorkSpace, WorkStation } from 'src/app/shared/model/user/user';
import { EditDashboardDialogComponent } from '../edit-dashboard-dialog/edit-dashboard-dialog.component';

@Component({
  selector: 'app-add-dashboard-dialog',
  templateUrl: './add-dashboard-dialog.component.html',
  styleUrls: ['./add-dashboard-dialog.component.scss']
})
export class AddDashboardDialogComponent {

  @Input() positionSelected!: WorkSpace;
  @Input() workspaceUser !: User;

  filteredUsers = new Array<User>();
  timeoutInput: any;

  constructor(
    public dialogRef: MatDialogRef<EditDashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService,
  ) { }

  filterUsers(value: string): User[] {
    const filterValue = value.toLowerCase();
    return this.userService.users.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  inputChange(name: any) {
    clearTimeout(this.timeoutInput);
    this.timeoutInput = setTimeout(() => {
      if (typeof name === 'string') {
        this.filteredUsers = name ? this.filterUsers(name) : this.userService.users.slice()
        this.userService.user = this.filterUsers(name)[0]
      }
    }, 500);
  }

  add(workspace: WorkSpace) {


    workspace.date_workstation = this.userService.dateSelected;

    this.dialogRef.close(workspace);
    this.userService.add_Workstation(workspace);
  }

}
