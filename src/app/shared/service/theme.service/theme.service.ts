import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    themeClass = '';

    setColor(colore: string) {
        if (colore == 'blue') {
            this.themeClass = 'blue';
            localStorage.setItem('color', this.themeClass);
        } if (colore == 'red') {
            this.themeClass = 'red';
            localStorage.setItem('color', this.themeClass);
        } if (colore == 'black') {
            this.themeClass = 'black';
            localStorage.setItem('color', this.themeClass);
        }
    }

    getColor() {
        return this.themeClass
    }
}