import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditDashboardDialogComponent } from 'src/app/shared/components/dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { WorkStation } from 'src/app/shared/model/user/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public userService: UserService,
  ) { }

  planModel: any = { start_time: new Date() };

  firstMatrix: WorkStation[][] =
    [
      [
        {
          id: 1,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 2,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 3,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 4,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 5,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
      ],
      [
        {
          id: 6,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 7,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 8,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 9,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 10,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
      ],
      [
        {
          id: 11,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 12,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 13,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 14,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 15,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
      ],
      [
        {
          id: 16,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 17,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 18,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 19,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 20,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
      ],
      [
        {
          id: 21,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 22,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 23,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 24,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 25,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
      ],
    ]

  secondMatrix: WorkStation[][] =
    [
      [
        {
          id: 26,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 27,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 28,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        }
      ], [
        {
          id: 29,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 30,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 31,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        }
      ],
      [
        {
          id: 32,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 33,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 34,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        }
      ],
      [
        {
          id: 35,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 36,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 37,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        }
      ],
      [
        {
          id: 38,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 39,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 40,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        }
      ]
    ]

  thirdMatrix: WorkStation[][] =
    [
      [
        {
          id: 41,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 42,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
      ],
      [
        {
          id: 43,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 44,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
      ],
      [
        {
          id: 45,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 46,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
      ],
      [
        {
          id: 47,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
        {
          id: 48,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
      ],
      [
        {
          id: 49,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: false
        },
        {
          id: 50,
          user: this.userService.userSelected,
          date: this.userService.dateSelected,
          flag: true
        },
      ],

    ]

  save(data: HTMLInputElement) {
    this.userService.dateSelected = data.value;
    console.log(this.userService.dateSelected);

    return this.userService.dateSelected;
  }

  ngOnInit(): void {
  }

  public get showName() {
    return localStorage.getItem("SessionUser")
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
