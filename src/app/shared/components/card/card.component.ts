import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from 'src/app/features/components/dashboard/home/home.component';
import { UserService } from '../../model/user/service/user.service';
import { User, WorkSpace, WorkStation } from '../../model/user/user';
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

  save(form: NgForm, event: any) {
    this.test(event)
    if (this.user) {
      this.openEdit(form);
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

  openEdit(form: NgForm) {//opening edit dialog
    const dialogRef = this.dialog.open(EditDashboardDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('sono edit')
      this.user = result?.userSelected
    })
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
