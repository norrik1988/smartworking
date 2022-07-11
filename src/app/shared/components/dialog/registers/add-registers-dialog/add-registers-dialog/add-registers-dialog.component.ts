import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Register } from 'src/app/shared/model/register/register';
import { RegisterService } from 'src/app/shared/model/register/service/register.service';
import { UserService } from 'src/app/shared/model/user/service/user.service';

@Component({
  selector: 'app-add-registers-dialog',
  templateUrl: './add-registers-dialog.component.html',
  styleUrls: ['./add-registers-dialog.component.scss']
})
export class AddRegistersDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddRegistersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Register,
    public registerService: RegisterService, public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(f: NgForm) {
    this.registerService.add(f.value);
    f.reset();
  }


}
