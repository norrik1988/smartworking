import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddRegistersDialogComponent } from 'src/app/shared/components/dialog/registers/add-registers-dialog/add-registers-dialog/add-registers-dialog.component';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';

@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.scss']
})
export class TableRegisterComponent implements OnInit, AfterViewInit {

  constructor(public registerService: RegisterService, public dialog: MatDialog) {
    this.registerService.dataSource = new MatTableDataSource<Register>(registerService.registers);
  }

  displayedColumns: string[] = ['giorno', 'inizio', 'fine', 'permesso', 'azioni'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.registerService.getAll()
  }

  ngAfterViewInit(): void {
    this.registerService.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.registerService.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.registerService.dataSource.paginator) {
      this.registerService.dataSource.paginator.firstPage();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRegistersDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

  openDelete(register: Register) {
    // this.registerService.registerSelected = register;
    // const dialogRef = this.dialog.open(DeleteRegistersDialogComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  openEdit(register: Register) {
    // this.registerService.registerSelected = register;
    // const dialogRef = this.dialog.open(EditRegistersDialogComponent, {
    //   width: '250px',
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
