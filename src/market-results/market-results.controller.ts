import { Controller, Get, Query } from "@nestjs/common";
import { MarketResultsService } from "./market-results.service";
import { MarketResultsRO } from "./market-result.interface";
import { MarketResultsSerializer } from "./market-results.serializer";

@Controller("market-results")
export class MarketResultsController {
  constructor(private readonly _marketResultsService: MarketResultsService) {}

  @Get()
  async findByMarketId(
    @Query("market_id") marketId: number
  ): Promise<MarketResultsRO> {
    const [
      marketResults,
      marketResultCount
    ] = await this._marketResultsService.findByMarketId(marketId);

    return {
      marketResults: marketResults.map(MarketResultsSerializer.serialize),
      marketResultCount
    };
  }
}
