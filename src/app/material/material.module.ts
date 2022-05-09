import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatToolbarModule } from '@angular/material/toolbar'
const imports = [
    FlexLayoutModule,

    MatToolbarModule

]
@NgModule({
    imports: [...imports],
    exports: [...imports]
})

export class MaterialModule { }