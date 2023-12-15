import { Component, Inject, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';
import { UserService } from 'src/app/shared/model/user/service/user.service'
import { User } from 'src/app/shared/model/user/user';



@Component({
  selector: 'app-add-registers-dialog',
  templateUrl: './add-registers-dialog.component.html',
  styleUrls: ['./add-registers-dialog.component.scss']
})
export class AddRegistersDialogComponent implements OnInit {
  timeoutInput: any;
  filteredUsers = new Array<User>();

  constructor(
    public dialogRef: MatDialogRef<AddRegistersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Register,
    public registerService: RegisterService, public userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(f: NgForm) {
    this.registerService.add(f.value);
    f.reset();
  }
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
