/* eslint-disable prettier/prettier */


export enum UserRole {
    guest = 'guest',
    user = 'user',
    admin = "admin",
}

export type User = {
    id?: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
    role: UserRole;
}

export type CreateUser = Pick<User, 'name' | 'email' | 'role' | 'password'>

export type UpdateUser = Partial<Omit<User, 'id'>>

