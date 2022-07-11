import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermitComponent } from './permit.component';
import { RouterModule } from '@angular/router';
import { PermissionManagementComponent } from './permission-management/permission-management.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PermitComponent, PermissionManagementComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: PermitComponent,
        children: [
          { path: 'permission-management', component: PermissionManagementComponent }
        ]
      }
    ])
  ]
})
export class PermitModule { }
