import { Controller, Get, Query } from "@nestjs/common";
import { MarketsService } from "./markets.service";
import { MarketsRO } from "./market.interface";

@Controller("markets")
export class MarketsController {
  constructor(private readonly _marketsService: MarketsService) {}

  @Get()
  async findByFeederId(
    @Query("feeder_id") feederId: number
  ): Promise<MarketsRO> {
    return await this._marketsService.findByFeederId(feederId);
  }
}
