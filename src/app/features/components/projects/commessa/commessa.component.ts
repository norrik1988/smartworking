import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectDialogComponent } from 'src/app/shared/components/dialog/projects/add/add-project-dialog.component';
import { DeleteProjectDialogComponent } from 'src/app/shared/components/dialog/projects/delete/delete-project-dialog.component';
import { EditProjectDialogComponent } from 'src/app/shared/components/dialog/projects/edit-dialog/edit-project-dialog.component';
import { Commessa } from 'src/app/shared/model/commessa/commessa';
import { CommessaService } from 'src/app/shared/model/commessa/service/commessa.service';

const ELEMENT_DATA: Commessa[] = []

@Component({
  selector: 'app-commessa',
  templateUrl: './commessa.component.html',
  styleUrls: ['./commessa.component.scss']
})
export class CommessaComponent implements OnInit {
  constructor(public dialog: MatDialog, public commService: CommessaService) { }
  ngOnInit(): void {
    this.commService.getAll();
  }


  displayedColumns: string[] = ['Commessa', 'Progetto', 'Descrizione', 'Azioni'];
  dataSource = ELEMENT_DATA;

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '250px',
      //data: { nome: this.nome, cognome: this.cognome, data_di_nascita: this.data_di_Nascita, codice_fiscale: this.codice_fiscale }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
  openDelete(commessa: Commessa) {
    this.commService.commSelected = commessa;
    const dialogRef = this.dialog.open(DeleteProjectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEdit(commessa: Commessa) {
    this.commService.commSelected = commessa;
    const dialogRef = this.dialog.open(EditProjectDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


