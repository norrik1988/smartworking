import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { TableRegisterComponent } from './table-register/table-register/table-register.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
    TableRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: RegisterComponent,
        children: [
          { path: 'table-register', component: TableRegisterComponent }
        ]
      }
    ])
  ],
  exports: [
    RegisterComponent,
    TableRegisterComponent
  ]
})
export class RegisterModule { }
