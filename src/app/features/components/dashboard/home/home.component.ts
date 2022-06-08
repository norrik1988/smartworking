import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditDashboardDialogComponent } from 'src/app/shared/components/dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';
import { UserService } from 'src/app/shared/model/user/service/user.service';

export interface Flag {
  flag: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  planModel: any = { start_time: new Date() };

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
  ) { }

  ngOnInit(): void {
    this.userService.get_smartWorking()
  }

  public get showName() {
    return localStorage.getItem("SessionUser")
  }


  save(data: HTMLInputElement) {
    this.userService.dateSelected = data.value;
    console.log(this.userService.dateSelected);

    return this.userService.dateSelected;
  }

  openEdit() {
    /* this.dashboard.userSelected = user; */
    const dialogRef = this.dialog.open(EditDashboardDialogComponent);
    this.userService.getUser();
    console.log(this.userService.getData());
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
      }
    );
  }
}
