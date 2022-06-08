export class User {
    id!: number;
    name!: string;
    surname!: string;
    date!: Date;
    tax_id_code!: string;
    date_smart!: Dates[];
    role!: string;
}

export class Dates {
    id!: number;
    date_work!: Date;
}