import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Market } from "./market.entity";
import { MarketsService } from "./markets.service";
import { MarketsController } from "./markets.controller";
import { FeedersModule } from "src/feeders/feeders.module";

@Module({
  imports: [TypeOrmModule.forFeature([Market]), FeedersModule],
  providers: [MarketsService],
  controllers: [MarketsController],
  exports: [MarketsService]
})
export class MarketsModule {}
