import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddRegistersDialogComponent } from 'src/app/shared/components/dialog/registers/add-registers-dialog/add-registers-dialog/add-registers-dialog.component';
import { DeleteRegistersDialogComponent } from 'src/app/shared/components/dialog/registers/delete-registers-dialog/delete-registers-dialog/delete-registres-dialog.component';
import { DetailRegistersDialogComponent } from 'src/app/shared/components/dialog/registers/detail-registers-dialog/detail-registers-dialog/detail-registers-dialog.component';
import { EditRegistersDialogComponent } from 'src/app/shared/components/dialog/registers/edit-registers-dialog/edit-registers-dialog/edit-registers-dialog.component';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.scss']
})
export class TableRegisterComponent implements OnInit, AfterViewInit {

  constructor(public registerService: RegisterService, public dialog: MatDialog) {
    this.registerService.dataSource = new MatTableDataSource<Register>(registerService.registers);
  }

  flag1: boolean = true;
  flag2: boolean = true;
  displayedColumns: string[] = ['giorno', 'inizio', 'fine', 'permesso', 'azioni'];
  fileName = 'ExcelSheet.xlsx';

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
    this.registerService.getAll()
  }

  ngAfterViewInit(): void {
    this.registerService.dataSource.paginator = this.paginator;
  }

  applyFilter(search: HTMLInputElement, searchMonth: HTMLInputElement) {

    if (search.value) {
      console.log('metodo searchDate')
      const filterValueSearch = this.registerService.dataSource.data.filter((res: any) => res.date == search.value);
      this.registerService.dataSource.data = filterValueSearch
      if (this.registerService.dataSource.paginator) {
        this.registerService.dataSource.paginator.firstPage();
      }
    } else {
      console.log('metodo searchMonth')
      const filterValueMonth = this.registerService.dataSource.data.filter((res: Register) => res.month == Number(searchMonth.value));
      this.registerService.dataSource.data = filterValueMonth;
      if (this.registerService.dataSource.paginator) {
        this.registerService.dataSource.paginator.firstPage();
      }
    }
    this.flag1 = true;
    this.flag2 = true;
  }

  flagOne(search: HTMLInputElement) {
    this.flag2 = false;
  }

  flagTwo(month: HTMLInputElement) {
    this.flag1 = false;
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
    this.registerService.registerSelected = register;
    const dialogRef = this.dialog.open(DeleteRegistersDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEdit(register: Register) {
    this.registerService.registerSelected = register;
    const dialogRef = this.dialog.open(EditRegistersDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDetail(register: Register) {
    this.registerService.registerSelected = register;
    const dialogRef = this.dialog.open(DetailRegistersDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  refresh(form: NgForm) {
    form.reset();
    this.registerService.getAll();
    this.flag1 = true;
    this.flag2 = true;
  }

  exportexcel() {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    //HIDDEN
    // ws['!cols'] = [];
    // ws['!cols'][0] = { hidden: true };

    let column = 'E';
    let indexExcel: string;
    for (let i = 1; i <= this.registerService.dataSource.data.length + 1; i++) {
      indexExcel = column + i;
      delete (ws[indexExcel])
    }

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Foglio1');
    /* save file */
    XLSX.writeFile(wb, 'SheetTest.xlsx');
  }


}
