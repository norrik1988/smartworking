import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


const imports = [
    FlexLayoutModule,

    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatCardModule

]
@NgModule({
    imports: [...imports],
    exports: [...imports]
})

export class MaterialModule { }