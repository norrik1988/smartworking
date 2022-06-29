import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../model/user/service/user.service';
import { User } from '../../model/user/user';
import { AddDashboardDialogComponent } from '../dialog/dashboard/add-dashboard-dialog/add-dashboard-dialog.component';
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

  constructor(public dialog: MatDialog, public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getWorkspace();

  }

  save(event: any) {
    this.get_id_position(event)
    if (this.user) {
      this.openEdit();
    } else {
      this.openAdd(event)
    }
  }

  openAdd(event: any) {//opening add dialog
    const dialogRef = this.dialog.open(AddDashboardDialogComponent);
    this.userService.getUser();
    this.userService.positionSelected = event.srcElement.__ngContext__[0].id;

    dialogRef.afterClosed().subscribe(result => {
      this.user = result?.userSelected
    });
  }

  openEdit() {//opening edit dialog
    const dialogRef = this.dialog.open(EditDashboardDialogComponent);
    this.userService.getUser();
    console.log(this.userService.workstationSelected)
    dialogRef.afterClosed().subscribe(result => {
      this.user = result?.user
    })
  }

  get_id_position(event: any) {
    for (let i = 0; i < this.userService.workstationArray.length; i++) {
      if (this.userService.workstationArray[i].id == event.srcElement.__ngContext__[0].id) {
        this.user = this.userService.workstationArray[i].user;
        this.userService.workstationSelected = this.userService.workstationArray[i]
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
