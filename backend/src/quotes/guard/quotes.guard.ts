/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { QUOTE_KEY } from '../decorators/quotes.decorator';

@Injectable()
export class QuoteGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
  ) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const quotes = this.reflector.getAllAndOverride(QUOTE_KEY, [
      context.getClass(), context.getHandler()
    ])

    console.log({ quotes });

    return true;
  }
}
