import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { globalVariable } from "../../global/global-variable";
import { Order } from "../order";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) { }
    dataSource!: MatTableDataSource<Order>;


    array: Order[] = [];
    orderSelected: Order = {} as Order;

    showSpinner = globalVariable.show;


    getAll() {
        this.http.get<Order[]>('http://localhost:3000/projects')
            .subscribe(res => this.dataSource.data = res)
    }

    add(order: Order) {
        this.http.post<Order>(`http://localhost:3000/projects`, order)
            .subscribe(res => {
                this.dataSource.data.push(res);
                if (this.showSpinner) {
                    this.getAll();
                }
            })
    }

    delete(order: Order): Order {
        this.http.delete(`http://localhost:3000/projects/${order.id}`)
            .subscribe(() => {
                const indice = this.dataSource.data.findIndex(c => c.id === order.id)
                this.dataSource.data.splice(indice, 1);

            })
        return order;
    }

    getorder(order: Order): Order {
        this.http.get(`http://localhost:3000/projects/${order.id}`)
            .subscribe(result => {
                const indice = this.dataSource.data.findIndex(c => c.id === order.id)
                this.dataSource.data[indice] === result;
                console.log(this.array[indice])
            })
        return order;
    }


    edit(form: NgForm) {
        this.http.patch<Order>(`http://localhost:3000/projects/${this.orderSelected?.id}`, form)
            .subscribe(res => {
                const index = this.dataSource.data.findIndex(cm => cm.id === this.orderSelected?.id);
                this.dataSource.data[index] = res;

            });
    }



}