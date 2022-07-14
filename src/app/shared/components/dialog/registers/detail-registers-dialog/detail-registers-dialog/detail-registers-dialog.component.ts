import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';

@Component({
  selector: 'app-detail-registers-dialog',
  templateUrl: 'detail-registers-dialog.component.html',
  styleUrls: ['./detail-registers-dialog.component.scss']

})
export class DetailRegistersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailRegistersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Register,
    public registerServise: RegisterService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
