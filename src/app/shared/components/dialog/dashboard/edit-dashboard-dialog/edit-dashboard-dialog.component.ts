import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from 'src/app/features/components/dashboard/home/home.component';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User, WorkStation } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-edit-dashboard-dialog',
  templateUrl: './edit-dashboard-dialog.component.html',
  styleUrls: ['./edit-dashboard-dialog.component.scss']
})
export class EditDashboardDialogComponent implements OnInit {

  @Input() userSelected: any;
  filteredUsers = new Array<User>();
  timeoutInput: any;

  workstation!: WorkStation;

  date = new Date();
  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<EditDashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService,
  ) { }


  filterUsers(value: string): User[] {
    const filterValue = value.toLowerCase();
    return this.userService.users.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  add(workstation: WorkStation) {
    workstation = this.userService.dateSelected;

    this.dialogRef.close(workstation)
    this.userService.add_Workstation(workstation)

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
