import { Component, OnInit } from '@angular/core';
import { UtentiService } from 'src/app/shared/model/user/service/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  constructor(public utenteService: UtentiService) { }

  ngOnInit(): void {
    this.utenteService.getAll();
  }

}
