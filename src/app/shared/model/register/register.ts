import { Time } from "@angular/common";
import { User } from "../user/user";

export class Register {
    id!: number;
    date: Date = new Date();
    start!: Time;
    end!: Time;
    permit!: string;
    state!: string;
    user!: User;
    dateEnd: Date = new Date();
    month!: number;
}
