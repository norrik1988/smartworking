import { Component, OnInit } from '@angular/core';
import { UtentiService } from 'src/app/shared/model/user/service/user.service';
import { Utente } from 'src/app/shared/model/user/user';


const ELEMENT_DATA: Utente[] = []
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cognome', 'cf', 'azioni'];
  dataSource = ELEMENT_DATA;

  constructor(public utenteService: UtentiService) { }

  ngOnInit(): void {
    this.utenteService.getAll();
  }

}
