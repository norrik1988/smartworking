import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../model/user/service/user.service';
import { User, WorkSpace, WorkStation } from '../../model/user/user';
import { EditDashboardDialogComponent } from '../dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() isScrollable: boolean = false;
  @Input() customCls: string | undefined;

  user?: User;
  constructor(public dialog: MatDialog, public userService: UserService) {
    this.userService.getWorkspace();

  }

  ngOnInit(): void {

  }


  openEdit(event: any) {//opening dialog
    const dialogRef = this.dialog.open(EditDashboardDialogComponent);
    this.userService.getUser();
    this.test(event)
    this.userService.positionSelected = event.srcElement.__ngContext__[0].id;
    // console.log(event)
    // console.log(this.userService.positionSelected)

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result)
      this.user = result?.userSelected
    });
  }

  test(event: any) {
    for (let i = 0; i < this.userService.workspaceArray.length; i++) {
      if (this.userService.workspaceArray[i].id_position == event.srcElement.__ngContext__[0].id) {
        this.user = this.userService.workspaceArray[i].user;
        console.log(this.user);
      }
    }
  }



  @HostBinding('className') get className() {//custom container drag
    let cls = 'card';
    cls += this.isScrollable ? ' scrollable' : '';
    cls += this.customCls ? ` ${this.customCls}` : '';
    return cls;
  }

}
