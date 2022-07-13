import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Register } from "../register";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    flag1: boolean = true;
    flag2: boolean = true;
    registers: Register[] = [];
    register!: Register;
    registerSelected: Register = {} as Register;
    dataSource!: MatTableDataSource<Register>;
    userSelected: Register = {} as Register;
    themeClass = '';
    typePermit: any = ['permesso', 'malattia', 'ferie']
    color = 'yellow'


    constructor(private http: HttpClient) { }

    get(register: Register): Register {
        this.http.get(`http://localhost:3000/register/${register.id}`)
            .subscribe(() => {
                const indice = this.dataSource.data.findIndex(re => re.id === register.id);
                this.getAll();
            })
        return register;
    }

    getAll() {
        this.http.get<Register[]>('http://localhost:3000/register').subscribe(res => {
            this.dataSource.data = res;
        })
    }

    getPermit() {
        this.http.get<Register>('http://localhost:3000/register').subscribe(res => {
            this.register.state = res.state;
        });
    }

    add(register: Register) {
        var date = new Date(register.date);
        console.log(date)
        register.month = date.getMonth() + 1;
        this.http.post<Register>(`http://localhost:3000/register`, register).subscribe(res => {
            this.dataSource.data.push(res);
            this.getAll();
        })
    }

    delete(register: Register): Register {
        this.http.delete(`http://localhost:3000/register/${register.id}`)
            .subscribe(() => {
                const indice = this.dataSource.data.findIndex(re => re.id === register.id);
                this.dataSource.data.splice(indice, 1);
                this.getAll();
            })
        return register;
    }

    edit(form: NgForm) {
        this.http.patch<Register>(`http://localhost:3000/register/${this.registerSelected?.id}`, form)
            .subscribe(res => {
                this.registerSelected.state = 'yellow'
                const index = this.dataSource.data.findIndex(re => re.id === this.registerSelected?.id);
                this.dataSource.data[index] = res;
                this.getAll();
            });
    }

    editPermit(value: Register) {
        this.http.patch<Register>(`http://localhost:3000/register/${this.registerSelected?.id}`, value)
            .subscribe(res => {
                const index = this.dataSource.data.findIndex(re => re.id === this.registerSelected?.id);
                this.dataSource.data[index] = res;
                this.getAll();
            });
    }

    applyFilter(search: HTMLInputElement, searchMonth: HTMLInputElement) {

        if (search.value) {
            console.log('metodo searchDate')
            const filterValueSearch = this.dataSource.data.filter((res: any) => res.date == search.value);
            this.dataSource.data = filterValueSearch
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        } else {
            console.log('metodo searchMonth')
            const filterValueMonth = this.dataSource.data.filter((res: Register) => res.month == Number(searchMonth.value));
            this.dataSource.data = filterValueMonth;
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        }
        this.flag1 = true;
        this.flag2 = true;
    }

    flagOne(search: HTMLInputElement) {
        this.flag2 = false;
    }

    flagTwo(month: HTMLInputElement) {
        this.flag1 = false;
    }

    refresh(form: NgForm) {
        form.reset();
        this.getAll();
        this.flag1 = true;
        this.flag2 = true;
    }
}