/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../types/users.types';


export const ROLE_KEY = 'roles';

export const Role = (...args: UserRole[]) => SetMetadata(ROLE_KEY, args);
