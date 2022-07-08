import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/model/user/service/user.service';

@Component({
  selector: 'app-delete-users-dialog',
  templateUrl: 'delete-users.component.html',

  styleUrls: ['./delete-users-dialog.component.scss']
})
export class DeleteUsersDialogComponent {

  constructor(public userService: UserService, public router: Router) { }



  delete() {
    this.userService.delete(this.userService.userSelected);
  }
}
