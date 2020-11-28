import { Role } from './role.model';

export class User {
    public userID: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public username: String;
    public password: string;
    public roleID: number;
    public role: Role;
    public token: string;
    
    constructor(){}
}
