import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';

@Component({
  selector: 'app-permission-management',
  templateUrl: './permission-management.component.html',
  styleUrls: ['./permission-management.component.scss']
})
export class PermissionManagementComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cognome', 'richiesta', 'giorno', 'inizio', 'fine', 'stato', 'azioni'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.registerService.dataSource.paginator = this.paginator;
  }
  constructor(public registerService: RegisterService) {
    this.registerService.dataSource = new MatTableDataSource<Register>(registerService.registers);
  }

  ngOnInit(): void {
    this.registerService.getAll();
  }


  check(value: Register) {
    this.registerService.get(value)
    console.log('value:' + value)
    console.log('prima:' + value.state)
    this.registerService.registerSelected = value;
    console.log('durante:' + this.registerService.registerSelected)
    value.state = 'green';
    this.registerService.themeClass = 'green';
    this.registerService.editPermit(value);
    console.log('topo:' + this.registerService.registerSelected)
  }

  clear(value: Register) {
    this.registerService.registerSelected = value;
    value.state = 'red';
    this.registerService.themeClass = 'red';
    this.registerService.editPermit(value);
  }




  getColor() {
    return this.registerService.themeClass
  }

}
