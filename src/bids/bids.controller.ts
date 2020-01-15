import { Controller, Get, Query } from "@nestjs/common";
import { BidsService } from "./bids.service";
import { BidsRO } from "./bid.interface";

@Controller("bids")
export class BidsController {
  constructor(private readonly _bidsService: BidsService) {}

  @Get()
  async findByMarketId(@Query("market_id") marketId: number): Promise<BidsRO> {
    return await this._bidsService.findByMarketId(marketId);
  }
}
