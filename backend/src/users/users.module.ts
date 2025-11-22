import { Post } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserMiddleware } from './middleware/users.middleware';
import { TestMiddleware } from './middleware/test.middleware';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware).forRoutes(UsersController)
      .apply(TestMiddleware).forRoutes(
        {
          path: 'users',
          method: RequestMethod.POST
        },
      )
  }
}
