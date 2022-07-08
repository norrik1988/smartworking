import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';

@Component({
  selector: 'app-edit-users-dialog',
  templateUrl: 'edit-users-dialog.component.html',
  styleUrls: ['./edit-users-dialog.component.scss']
})
export class EditUsersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit(form: NgForm) {
    this.userService.edit(form);
  }

}
