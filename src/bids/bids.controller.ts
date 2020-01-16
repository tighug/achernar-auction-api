import { Controller, Get, Query } from "@nestjs/common";
import { BidsService } from "./bids.service";
import { BidsRO } from "./bid.interface";
import { BidsSerializer } from "./bids.serializer";

@Controller("bids")
export class BidsController {
  constructor(private readonly _bidsService: BidsService) {}

  @Get()
  async findByMarketId(@Query("market_id") marketId: number): Promise<BidsRO> {
    const [bids, bidCount] = await this._bidsService.findByMarketId(marketId);
    return {
      bids: bids.map(BidsSerializer.serialize),
      bidCount
    };
  }
}
