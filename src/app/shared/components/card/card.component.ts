import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../model/user/service/user.service';
import { User } from '../../model/user/user';
import { WorkSpaceService } from '../../model/workspace/service/workspace.service';
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

  @Input() idWorkStation!: number;
 
  constructor(public dialog: MatDialog, public userService: UserService, public workspaceService: WorkSpaceService) { }

  ngOnInit(): void {
    this.workspaceService.getWorkspace();
    
  }

  openEdit() {//opening edit dialog
    const dialogRef = this.dialog.open(EditDashboardDialogComponent, {
      data: {id: this.idWorkStation},});
      this.workspaceService.id = this.idWorkStation
    this.userService.getUser();
    dialogRef.afterClosed().subscribe(result => {
      this.user = result?.user
    })
  }

  get_id_position(event: any) {
    for (let i = 0; i < this.workspaceService.workstationArray.length; i++) {
      if (this.workspaceService.workstationArray[i].id == event.srcElement.__ngContext__[0].id) {
        this.user = this.workspaceService.workstationArray[i].user;
        this.workspaceService.workstationSelected = this.workspaceService.workstationArray[i]
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
