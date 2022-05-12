import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectDialogComponent } from 'src/app/shared/components/dialog/projects/add/add-project-dialog.component';
import { DeleteProjectDialogComponent } from 'src/app/shared/components/dialog/projects/delete/delete-project-dialog.component';
import { Commessa } from 'src/app/shared/model/commessa/commessa';

@Component({
  selector: 'app-commessa',
  templateUrl: './commessa.component.html',
  styleUrls: ['./commessa.component.scss']
})
export class CommessaComponent {
  utenteService: any;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '250px',
      //data: { nome: this.nome, cognome: this.cognome, data_di_nascita: this.data_di_Nascita, codice_fiscale: this.codice_fiscale }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
  openDelete(utente: Commessa) {
    this.utenteService.userAttuale = utente;
    const dialogRef = this.dialog.open(DeleteProjectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


