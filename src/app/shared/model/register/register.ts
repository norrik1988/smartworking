import { Time } from "@angular/common";

export class Register {
    id!: number;
    // day!: string;
    date: Date = new Date();
    start!: Time;
    end!: Time;
    permit!: string;
    month!: number;
}
export class FullDate {
    day!: number;
    month!: number;
    year!: number;
}