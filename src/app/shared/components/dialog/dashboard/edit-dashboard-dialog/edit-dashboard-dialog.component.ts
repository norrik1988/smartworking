import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User, WorkSpace } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-edit-dashboard-dialog',
  templateUrl: './edit-dashboard-dialog.component.html',
  styleUrls: ['./edit-dashboard-dialog.component.scss']
})
export class EditDashboardDialogComponent implements OnInit {

  filteredUsers = new Array<User>();
  timeoutInput: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  edit(workspace: WorkSpace) { }

  filterUsers(value: string): User[] {
    const filterValue = value.toLowerCase();
    return this.userService.users.filter(state => state.name.toLowerCase().includes(filterValue));
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

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
}
