/* eslint-disable prettier/prettier */
import { Controller, Get, Scope, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDecorator } from './tests/test-decorator/test-decorator.decorator';
import { TestGuardGuard } from './tests/test-guard/test-guard.guard';

@Controller({ scope: Scope.DEFAULT, path: '/' })
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UseGuards(TestGuardGuard)
  @TestDecorator('testing')
  getHello(): string {
    return this.appService.getHello();
  }
}
