import { Controller, Get, Query } from "@nestjs/common";
import { MarketResultsService } from "./market-results.service";
import { MarketResultsRO } from "./market-result.interface";

@Controller("market-results")
export class MarketResultsController {
  constructor(private readonly _marketResultsService: MarketResultsService) {}

  @Get()
  async findByMarketId(
    @Query("market_id") marketId: number
  ): Promise<MarketResultsRO> {
    return await this._marketResultsService.findByMarketId(marketId);
  }
}
