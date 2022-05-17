import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddProjectDialogComponent } from 'src/app/shared/components/dialog/project/add-project-dialog/add-project-dialog.component';
import { DeleteProjectDialogComponent } from 'src/app/shared/components/dialog/project/delete-project-dialog/delete-project-dialog.component';
import { EditProjectDialogComponent } from 'src/app/shared/components/dialog/project/edit-project-dialog/edit-project-dialog.component';
import { Order } from 'src/app/shared/model/commessa/order';
import { OrderService } from 'src/app/shared/model/commessa/service/order.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent implements OnInit {
  displayedColumns: string[] = ['Progetto', 'Descrizione', 'Commessa', 'Azioni'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public orderService: OrderService, public dialog: MatDialog) {
    this.orderService.dataSource = new MatTableDataSource<Order>(orderService.array);
  }

  ngAfterViewInit(): void {
    this.orderService.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.orderService.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.orderService.dataSource.paginator) {
      this.orderService.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.orderService.getAll()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

  openDelete(order: Order) {
    this.orderService.orderSelected = order;

    const dialogRef = this.dialog.open(DeleteProjectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEdit(order: Order) {
    this.orderService.orderSelected = order;
    const dialogRef = this.dialog.open(EditProjectDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

