export interface User {
    username: string;
    password: string;
    //Please use an enum for role;
    role: UserRole;
}

export enum UserRole {
    None = 0,
    User = 1,
    Admin = 2
}