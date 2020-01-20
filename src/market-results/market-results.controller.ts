import { Controller, Get, Query } from "@nestjs/common";
import { MarketResultsService } from "./market-results.service";
import { MarketResultsRO } from "./market-result.interface";
import { MarketResultsSerializer } from "./market-results.serializer";
import { FindMarketResultsQuery } from "./market-result.dto";

@Controller("marketResults")
export class MarketResultsController {
  constructor(private readonly _marketResultsService: MarketResultsService) {}

  @Get()
  async findAll(
    @Query() query: FindMarketResultsQuery
  ): Promise<MarketResultsRO> {
    const [
      marketResults,
      marketResultCount
    ] = await this._marketResultsService.findAll(query);

    return {
      marketResults: marketResults.map(MarketResultsSerializer.serialize),
      marketResultCount
    };
  }
}
