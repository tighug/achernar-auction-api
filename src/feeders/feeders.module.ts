import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Feeder } from "./feeder.entity";
import { FeedersService } from "./feeders.service";
import { FeedersController } from "./feeders.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Feeder])],
  controllers: [FeedersController],
  providers: [FeedersService]
})
export class FeedersModule {}
