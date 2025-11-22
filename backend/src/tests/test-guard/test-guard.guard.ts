/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { TEST_DECORATOR } from '../test-decorator/test-decorator.decorator';

@Injectable()
export class TestGuardGuard implements CanActivate {


  constructor(
    private reflector: Reflector,
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const tests = this.reflector.getAllAndMerge<string[]>(TEST_DECORATOR, [
      context.getClass(),
      context.getHandler()
    ])

    console.log({ tests });

    // TODO APPLY LOGIC

    return true;
  }
}
