import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectDialogComponent } from 'src/app/shared/components/dialog/project/add-project-dialog/add-project-dialog.component';
import { DeleteProjectDialogComponent } from 'src/app/shared/components/dialog/project/delete-project-dialog/delete-project-dialog.component';
import { EditProjectDialogComponent } from 'src/app/shared/components/dialog/project/edit-project-dialog/edit-project-dialog.component';
import { Commessa } from 'src/app/shared/model/commessa/commessa';
import { CommessaService } from 'src/app/shared/model/commessa/service/commessa.service';

const ELEMENT_DATA: Commessa[] = []
@Component({
  selector: 'app-commessa',
  templateUrl: './commessa.component.html',
  styleUrls: ['./commessa.component.scss']
})
export class CommessaComponent implements OnInit {
  displayedColumns: string[] = ['Commessa', 'Progetto', 'Descrizione', 'Azioni'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.commService.getAll();
  }

  constructor(public commService: CommessaService, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '250px',
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
