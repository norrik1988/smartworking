import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderService } from 'src/app/shared/model/commessa/service/order.service';

@Component({
  selector: 'app-delete-project-dialog',
  template: `
    <h2 mat-dialog-title>Delete Project</h2>
    <mat-dialog-content class="mat-typography">
  
      <strong>Commessa : </strong>
      <span>{{orderService.orderSelected?.order}}</span>

      <br>

      <strong>Progetto : </strong>
      <span>{{orderService.orderSelected?.name}}</span>  
        
      <br>

      <strong>Descrizione : </strong>
      <span> {{orderService.orderSelected?.description}}</span>

    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close (click)="delete()">Cancella</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Annulla</button>
    </mat-dialog-actions>
  `,
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
