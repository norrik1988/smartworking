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
  selected = 'all';

  ngOnInit(): void {
    this.registerService.getAll()
  }

  ngAfterViewInit(): void {
    this.registerService.dataSource.paginator = this.paginator;
  }
  searchRegister: Register[] = []
  applyFilter(form: HTMLInputElement) {
    // console.log(form + 'ciaaa')
    // //const filterValue = (event.target as HTMLInputElement).value;
    // this.search = form;
    // this.registerService.dataSource.filter = this.search.trim();
    // if (this.registerService.dataSource.paginator) {
    //   this.registerService.dataSource.paginator.firstPage();
    // }



    //const filterValue = this.registerService.registers.filter((res) => res.date == form)
    // console.log(form.value);
    // if (form.value == this.registerService.registers) { }
    // const filterValue = this.registerService.dataSource.data.filter(res => res.date == form.value);
    // console.log(filterValue);

    //this.registerService.dataSource.filter = this.searchRegister;
    //if (this.registerService.dataSource.paginator) {
    //this.registerService.dataSource.paginator.firstPage();
    //}


    // const filterValue = this.registerService.dataSource.data.filter((res: any) => res.date == formValue);
    // console.log(filterValue)
    console.log(form.value);
    const filterValue = this.registerService.dataSource.data.filter(res => res.date == form.value);
    console.log(filterValue);
    this.registerService.dataSource.data = filterValue
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

  // refresh() {
  //   window.location.reload();
  // }

  refresh(event: Event, form: NgForm) {
    form.reset();
    this.registerService.getAll()
  }

}
