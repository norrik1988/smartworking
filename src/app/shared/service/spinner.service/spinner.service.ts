import { Injectable } from "@angular/core";
import { globalVariable } from "../../model/global/global-variable";


@Injectable({
    providedIn: 'root'
})
export class SpinnerService {


    showSpinner = globalVariable.show;


}