/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';
import { TestMiddleware } from './quotes/middlewares/test.middleware';
// import { QuotesController } from './quotes/quotes.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [QuotesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TestMiddleware).forRoutes('*')
  }

}

