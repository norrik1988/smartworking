import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
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
  nome!: string;
  cognome!: string;
  data_di_Nascita!: Date;
  codice_fiscale!: string;



  constructor(public utenteService: UtentiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.utenteService.getAll();
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      //data: { nome: this.nome, cognome: this.cognome, data_di_nascita: this.data_di_Nascita, codice_fiscale: this.codice_fiscale }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nome = result;

    }

    )


  }

}
