import { CoreModule } from './core.module';
import { Module } from "@nestjs/common";

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: []
})
export class AppModule {}
