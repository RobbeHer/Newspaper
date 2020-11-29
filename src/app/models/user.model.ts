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
    fillUp(){
        this.userID = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.username = '';
        this.password = '';
        this.roleID = 0;
        this.token = '';
    }
}
