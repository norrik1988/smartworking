import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { AddUsersDialogComponent } from 'src/app/shared/components/dialog/users/add-users-dialog/add-users-dialog.component';
import { DeleteUsersDialogComponent } from 'src/app/shared/components/dialog/users/delete-users-dialog/delete-users-dialog.component';
import { EditUsersDialogComponent } from 'src/app/shared/components/dialog/users/edit-users-dialog/edit-users-dialog.component';

import { UtentiService } from 'src/app/shared/model/user/service/user.service';
import { Utente } from 'src/app/shared/model/user/user';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'cognome', 'cf', 'azioni'];
  dataSource: MatTableDataSource<Utente>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public utenteService: UtentiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Utente>(utenteService.utenti);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.utenteService.getAll()

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddUsersDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
  openDelete(utente: Utente) {
    this.utenteService.userAttuale = utente;
    const dialogRef = this.dialog.open(DeleteUsersDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openEdit(utente: Utente) {
    this.utenteService.userAttuale = utente;
    const dialogRef = this.dialog.open(EditUsersDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
