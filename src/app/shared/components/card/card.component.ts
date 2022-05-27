import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../model/user/service/user.service';
import { EditDashboardDialogComponent } from '../dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public dialog: MatDialog, public userService: UserService) { }

  @Input() class: any
  ngOnInit(): void {
  }

  openEdit() {
    /* this.dashboard.userSelected = user; */
    const dialogRef = this.dialog.open(EditDashboardDialogComponent, {
      width: '250px',
    });
    this.userService.getUser();
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
