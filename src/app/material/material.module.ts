import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

const imports = [
    FlexLayoutModule,

]
@NgModule({
    imports: [...imports],
    exports: [...imports]
})

export class MaterialModule { }