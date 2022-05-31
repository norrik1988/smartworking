import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatSelectModule} from '@angular/material/select';


const imports = [
    FlexLayoutModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    DragDropModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSelectModule

]
@NgModule({
    imports: [...imports],
    exports: [...imports]
})

export class MaterialModule { }