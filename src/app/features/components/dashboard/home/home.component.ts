import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { WorkSpaceService } from 'src/app/shared/model/workspace/service/workspace.service';
import { WorkSpace } from 'src/app/shared/model/workspace/workspace';
import { AuthService } from 'src/app/shared/service/auth.service/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  planModel: any = {
    start_time: new Date().toISOString().replace(/T.*$/, ''),
  };

  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    private http: HttpClient,
    public workspaceService: WorkSpaceService,
    public authService: AuthService
  ) {
    userService.dateSelected = this.planModel.start_time;
  }

  ngOnInit() {
    this.workspaceService.getWorkspace().subscribe((res) => {
      this.workspaceService.workspace = res;
    })
  }



}
