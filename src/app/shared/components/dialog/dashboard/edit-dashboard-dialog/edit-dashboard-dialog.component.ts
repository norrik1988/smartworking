import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-edit-dashboard-dialog',
  templateUrl: './edit-dashboard-dialog.component.html',
  styleUrls: ['./edit-dashboard-dialog.component.scss']
})
export class EditDashboardDialogComponent implements OnInit {

  @Input() userSelected: any;
  filteredUsers = new Array<User>();
  timeoutInput: any;

  date = new Date();

  ngOnInit() {
    this.userService.get_smartWorking()
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



  add(user: User) {
    user.date_smart = this.userService.dateSelected
    this.userService.add_smartWorking(user)
    this.dialogRef.close(user)
  }

  add_date(user: User) {
    user.date_smart = this.userService.dateSelected
    this.userService.add_dateSmart(user)
    this.dialogRef.close(user)
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
