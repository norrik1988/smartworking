import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { WorkSpaceService } from 'src/app/shared/model/workspace/service/workspace.service';
import { WorkSpace } from 'src/app/shared/model/workspace/workspace';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  workspace!: WorkSpace[];

  n = 5;
  planModel: any = {
    start_time: new Date().toISOString().replace(/T.*$/, ''),
  };

  constructor(public dialog: MatDialog, public userService: UserService, private http: HttpClient, private workspaceService: WorkSpaceService) {
    userService.dateSelected = this.planModel.start_time;
  }

  ngOnInit() {
    this.workspaceService.getWorkspace().subscribe((res) => {
      this.workspaceService.workspace = res;
      this.workspace = this.workspaceService.workspace;
  //   console.log('home '+JSON.stringify(this.workspaceService.workspace))
    })
  }

  public get showName() {
    return localStorage.getItem("SessionUser")
  }

}
