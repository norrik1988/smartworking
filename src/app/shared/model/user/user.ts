export class User {
    id!: number;
    name!: string;
    surname!: string;
    date!: Date;
    tax_id_code!: string;
    role!: string;
}

export class WorkStation {
    id!: number;
    user?: User;
    card_visibility!: boolean;
}

export class WorkSpace {
    id!: number;
    date_workstation!: Date;
    workstations!: WorkStation[];

    
}