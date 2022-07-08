import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderService } from 'src/app/shared/model/commessa/service/order.service';

@Component({
  selector: 'app-delete-project-dialog',
  templateUrl: 'delete-project-dialog.component.html',
  styleUrls: ['./delete-project-dialog.component.scss']
})
export class DeleteProjectDialogComponent {

  constructor(public orderService: OrderService, private http: HttpClient) { }

  comm: any;

  delete() {
    this.orderService.delete(this.orderService.orderSelected);
    setTimeout(() => {
      this.http.get<any[]>('http://localhost:3000/projects')
        .subscribe(result => this.comm = result);
    }, 0);
  }
}
