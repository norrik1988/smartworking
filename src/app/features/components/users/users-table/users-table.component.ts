import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddUsersDialogComponent } from 'src/app/shared/components/dialog/users/add-users-dialog/add-users-dialog.component';
import { DeleteUsersDialogComponent } from 'src/app/shared/components/dialog/users/delete-users-dialog/delete-users-dialog.component';
import { EditUsersDialogComponent } from 'src/app/shared/components/dialog/users/edit-users-dialog/edit-users-dialog.component';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User } from 'src/app/shared/model/user/user';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'cognome', 'cf', 'azioni'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public userService: UserService, public dialog: MatDialog) {
    this.userService.dataSource = new MatTableDataSource<User>(userService.users);
  }

  ngAfterViewInit(): void {
    this.userService.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    console.log(event)
    const filterValue = (event.target as HTMLInputElement).value;
    this.userService.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.userService.dataSource.paginator) {
      this.userService.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.userService.getAll()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUsersDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

  openDelete(user: User) {
    this.userService.userSelected = user;
    const dialogRef = this.dialog.open(DeleteUsersDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEdit(user: User) {
    this.userService.userSelected = user;
    const dialogRef = this.dialog.open(EditUsersDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
