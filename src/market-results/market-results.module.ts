import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MarketResult } from "./market-result.entity";
import { MarketResultsService } from './market-results.service';
import { MarketResultsController } from './market-results.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MarketResult])],
  providers: [MarketResultsService],
  controllers: [MarketResultsController]
})
export class MarketResultsModule {}
