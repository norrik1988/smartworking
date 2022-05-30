import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDashboardDialogComponent } from 'src/app/shared/components/dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { DashboardService } from 'src/app/shared/service/dashboard.service/dashboard.service.service';

export interface Flag {
  flag: boolean;
}

export interface Dashboard {
  name: string;
  surname: string;
  date: Date;
  role: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstMatrix: Flag[][] =
    [
      [
        { flag: false },
        { flag: false },
        { flag: true },
        { flag: true },
        { flag: true },
      ],
      [
        { flag: false },
        { flag: false },
        { flag: false, },
        { flag: false },
        { flag: false },
      ],
      [
        { flag: false },
        { flag: false },
        { flag: true, },
        { flag: true },
        { flag: false },
      ],
      [
        { flag: true },
        { flag: false },
        { flag: false, },
        { flag: false },
        { flag: false },
      ],
      [
        { flag: true },
        { flag: false },
        { flag: true, },
        { flag: true },
        { flag: true },
      ]
    ]
  secondMatrix: Flag[][] =
    [
      [
        { flag: false },
        { flag: false },
        { flag: false },

      ],
      [
        { flag: false },
        { flag: false },
        { flag: false, },

      ],
      [
        { flag: true },
        { flag: false },
        { flag: true },

      ],
      [
        { flag: true },
        { flag: false },
        { flag: true },

      ],
      [
        { flag: true },
        { flag: false },
        { flag: true },

      ],
    ]
  thirdMatrix: Flag[][] =
    [
      [
        { flag: false },
        { flag: true },

      ],
      [
        { flag: true },
        { flag: false },

      ],
      [
        { flag: true },
        { flag: false },

      ],
      [
        { flag: true },
        { flag: false },

      ],
      [
        { flag: false },
        { flag: true },

      ],
    ]


  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    public dashService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashService?.getData();
  }

  public get showName() {
    return localStorage.getItem("SessionUser")
  }

  openEdit() {
    /* this.dashboard.userSelected = user; */
    const dialogRef = this.dialog.open(EditDashboardDialogComponent);
    this.userService.getUser();
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
      }
    );
  }
}
