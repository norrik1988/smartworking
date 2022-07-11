import { Component, OnInit, ViewChild } from '@angular/core';
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
  displayedColumns: string[] = ['nome', 'cognome', 'richiesta', 'giorno', 'inizio', 'fine', 'azioni'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.registerService.dataSource.paginator = this.paginator;
  }
  constructor(public registerService: RegisterService) {
    this.registerService.dataSource = new MatTableDataSource<Register>(registerService.registers);
  }

  ngOnInit(): void {
    this.registerService.getAll()

  }

}
