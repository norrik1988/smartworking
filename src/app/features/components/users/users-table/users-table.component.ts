import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddDialogComponent } from 'src/app/shared/components/dialog/add-dialog/dialog.component';
import { DeleteDialogComponent } from 'src/app/shared/components/dialog/delete-dialog/dialog-delete.component';
import { EditDialogComponent } from 'src/app/shared/components/dialog/edit-dialog/edit-dialog.component';

import { UtentiService } from 'src/app/shared/model/user/service/user.service';
import { Utente } from 'src/app/shared/model/user/user';


const ELEMENT_DATA: Utente[] = []
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['nome', 'cognome', 'cf', 'azioni'];
  dataSource: MatTableDataSource<Utente>
  nome!: string;
  cognome!: string;
  data_di_Nascita!: Date;
  codice_fiscale!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public utenteService: UtentiService, public dialog: MatDialog) {
    this.dataSource= new MatTableDataSource<Utente>(utenteService.utenti);
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
    this.utenteService.getAll();
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px',
      //data: { nome: this.nome, cognome: this.cognome, data_di_nascita: this.data_di_Nascita, codice_fiscale: this.codice_fiscale }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nome = result;
    })
  }
  openDelete(utente: Utente) {
    this.utenteService.userAttuale = utente;
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openEditDialog(utente: Utente){
    this.utenteService.userAttuale = utente;
    const dialogRef = this.dialog.open(EditDialogComponent,{
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
