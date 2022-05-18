import { Injectable } from "@angular/core";
import { globalVariable } from "../../model/global/global-variable";


@Injectable({
    providedIn: 'root'
})
export class SpinnerService {


    showSpinner = globalVariable.show;

    loadSpinner() {
        this.showSpinner = true;
        setTimeout(() => {
            this.showSpinner = false
        }, 2000);
    }
}