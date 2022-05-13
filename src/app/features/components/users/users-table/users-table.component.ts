import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersDialogComponent } from 'src/app/shared/components/dialog/users/add-users-dialog/add-users-dialog.component';
import { DeleteUsersDialogComponent } from 'src/app/shared/components/dialog/users/delete-users-dialog/delete-users-dialog.component';
import { EditUsersDialogComponent } from 'src/app/shared/components/dialog/users/edit-users-dialog/edit-users-dialog.component';
import { UtentiService } from 'src/app/shared/model/user/service/user.service';
import { Utente } from 'src/app/shared/model/user/user';

const ELEMENT_DATA: Utente[] = []

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cognome', 'cf', 'azioni'];
  dataSource = ELEMENT_DATA;



  constructor(public utenteService: UtentiService, public dialog: MatDialog) { }

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
