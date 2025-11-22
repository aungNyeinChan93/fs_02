/* eslint-disable prettier/prettier */
import { Injectable, Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware<Request, Response> {

  private logger: Logger = new Logger(UserMiddleware.name, { timestamp: true })

  use(req: Request, res: Response, next: NextFunction) {
    const pathname = req.baseUrl;
    const { method, params, query, body, headers, } = req;

    const token = req.headers.authorization?.split('')[1];

    if (!token) throw new UnauthorizedException('token not found!')

    this.logger.log({ pathname, method, params, query, headers: JSON.stringify(headers), body: JSON.stringify(body) });

    next();
  }
}
