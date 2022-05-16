import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddProjectDialogComponent } from 'src/app/shared/components/dialog/project/add-project-dialog/add-project-dialog.component';
import { DeleteProjectDialogComponent } from 'src/app/shared/components/dialog/project/delete-project-dialog/delete-project-dialog.component';
import { EditProjectDialogComponent } from 'src/app/shared/components/dialog/project/edit-project-dialog/edit-project-dialog.component';
import { Commessa } from 'src/app/shared/model/commessa/commessa';
import { CommessaService } from 'src/app/shared/model/commessa/service/commessa.service';

@Component({
  selector: 'app-commessa',
  templateUrl: './commessa.component.html',
  styleUrls: ['./commessa.component.scss']
})
export class CommessaComponent implements OnInit {
  displayedColumns: string[] = ['Commessa', 'Progetto', 'Descrizione', 'Azioni'];

  dataSource: MatTableDataSource<Commessa>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public commService: CommessaService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Commessa>(commService.array);
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
    this.commService.getAll()
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
  openDelete(comm: Commessa) {
    this.commService.commSelected = comm;

    const dialogRef = this.dialog.open(DeleteProjectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openEdit(comm: Commessa) {
    this.commService.commSelected = comm;
    const dialogRef = this.dialog.open(EditProjectDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

