import { User } from "../user/user";

export class WorkStation {
    id!: number;
    user?: User;
    card_visibility!: boolean;
}