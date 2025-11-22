/* eslint-disable prettier/prettier */

import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';


@Injectable()
export class TestMiddleware implements NestMiddleware<Request, Response> {
  private logger: Logger = new Logger(TestMiddleware.name, { timestamp: true });

  constructor() { };

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log('hit test middleware');


    next();
  }
}
