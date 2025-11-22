/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User, UserRole } from "../types/users.types";



export class CreateUserDto implements User {

    @IsOptional()
    id?: string | undefined;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsEnum(UserRole)
    role: UserRole;

    @IsOptional()
    created_at?: Date | undefined;

    @IsOptional()
    updated_at?: Date | undefined;
}
