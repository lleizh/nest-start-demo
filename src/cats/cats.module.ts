import { CatsService } from "./cats.service";
import { CatsController } from "./cats.controller";
import { Module } from "@nestjs/common";

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}
