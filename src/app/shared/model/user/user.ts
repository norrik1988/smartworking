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
    workstations: WorkStation[] = [
        {
            id: 1,
            user: new User,
            card_visibility: false
        },
        {
            id: 2,
            user: new User,
            card_visibility: false
        },
        {
            id: 3,
            user: new User,
            card_visibility: true
        },
        {
            id: 4,
            user: new User,
            card_visibility: true
        },
        {
            id: 5,
            user: new User,
            card_visibility: true
        },
        {
            id: 6,
            user: new User,
            card_visibility: false
        },
        {
            id: 7,
            user: new User,
            card_visibility: false
        },
        {
            id: 8,
            user: new User,
            card_visibility: false
        },
        {
            id: 9,
            user: new User,
            card_visibility: false
        },
        {
            id: 10,
            user: new User,
            card_visibility: false
        },
        {
            id: 11,
            user: new User,
            card_visibility: false
        },
        {
            id: 12,
            user: new User,
            card_visibility: false
        },
        {
            id: 13,
            user: new User,
            card_visibility: true
        },
        {
            id: 14,
            user: new User,
            card_visibility: true
        },
        {
            id: 15,
            user: new User,
            card_visibility: false
        },
        {
            id: 16,
            user: new User,
            card_visibility: true
        },
        {
            id: 17,
            user: new User,
            card_visibility: false
        },
        {
            id: 18,
            user: new User,
            card_visibility: false
        },
        {
            id: 19,
            user: new User,
            card_visibility: false
        },
        {
            id: 20,
            user: new User,
            card_visibility: false
        },
        {
            id: 21,
            user: new User,
            card_visibility: true
        },
        {
            id: 22,
            user: new User,
            card_visibility: false
        },
        {
            id: 23,
            user: new User,
            card_visibility: true
        },
        {
            id: 24,
            user: new User,
            card_visibility: true
        },
        {
            id: 25,
            user: new User,
            card_visibility: true
        }

    ];
}