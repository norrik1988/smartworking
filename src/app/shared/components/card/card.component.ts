import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <mat-card class="card">
    <mat-card-header>
      <mat-card-title>{{titolo}}</mat-card-title>
    </mat-card-header>
    
    <mat-divider></mat-divider>

    <mat-card-content>
      <p>
        <ng-content></ng-content>  
      </p>
    </mat-card-content>
  
    <mat-card-actions>
      <ng-content></ng-content>
    </mat-card-actions>
  </mat-card>

  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() titolo: string | undefined;

}
