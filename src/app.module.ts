import { CatsController } from "./cats/cats.controller";
import { LoggerMiddleware, logger } from "./middleware/logger.middleware";
import { CoreModule } from "./core.module";
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod
} from "@nestjs/common";
import { DogsController } from "./dogs/dogs.controller";

@Module({
  imports: [CoreModule],
  controllers: [DogsController],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes("*");
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: "cats", method: RequestMethod.GET })
      .forRoutes(CatsController);

    consumer.apply(LoggerMiddleware, logger).forRoutes(DogsController);
  }
}
