/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLE_KEY } from '../decorator/role.decorator';
import { Request } from 'express';

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

    const req: Request = context.switchToHttp().getRequest();
    const user_agent = req.get('user-agent');

    if (user_agent !== 'HTTPie') return false;

    if (!roles) return false;

    console.log(JSON.stringify(user_agent, null, 2))

    return true;
  }
}
