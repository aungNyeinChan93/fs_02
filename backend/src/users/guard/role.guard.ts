/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLE_KEY } from '../decorator/role.decorator';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
  ) { };

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.getAllAndOverride(ROLE_KEY, [
      context.getClass(), context.getHandler()
    ]);

    if (!roles) return false;

    console.log(JSON.stringify(roles, null, 2))

    return true;
  }
}
