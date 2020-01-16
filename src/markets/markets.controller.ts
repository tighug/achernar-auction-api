import { Controller, Get, Query } from "@nestjs/common";
import { MarketsService } from "./markets.service";
import { MarketsRO } from "./market.interface";
import { MarketsSerializer } from "./markets.serializer";

@Controller("markets")
export class MarketsController {
  constructor(private readonly _marketsService: MarketsService) {}

  @Get()
  async findByFeederId(
    @Query("feeder_id") feederId: number
  ): Promise<MarketsRO> {
    const [markets, marketCount] = await this._marketsService.findByFeederId(
      feederId
    );

    return {
      markets: markets.map(MarketsSerializer.serialize),
      marketCount
    };
  }
}
