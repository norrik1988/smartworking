import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from 'src/app/features/components/dashboard/home/home.component';
import { UserService } from '../../model/user/service/user.service';
import { User, WorkStation } from '../../model/user/user';
import { EditDashboardDialogComponent } from '../dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() isScrollable: boolean = false;
  @Input() customCls: string | undefined;

  user!: User;

  constructor(public dialog: MatDialog, public userService: UserService) { }

  openEdit() {//opening dialog
    const dialogRef = this.dialog.open(EditDashboardDialogComponent);
    this.userService.getUser();
    dialogRef.afterClosed().subscribe(result => {
      this.user = result
    });

  }

  @HostBinding('className') get className() {//custom container drag
    let cls = 'card';
    cls += this.isScrollable ? ' scrollable' : '';
    cls += this.customCls ? ` ${this.customCls}` : '';
    return cls;
  }


}
