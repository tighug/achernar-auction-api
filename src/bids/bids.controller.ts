import { Controller, Get, Query } from "@nestjs/common";
import { BidsService } from "./bids.service";
import { BidsRO } from "./bid.interface";
import { BidsSerializer } from "./bids.serializer";
import { FindBidsQuery } from "./bid.dto";

@Controller("bids")
export class BidsController {
  constructor(private readonly _bidsService: BidsService) {}

  @Get()
  async findAll(@Query() query: FindBidsQuery): Promise<BidsRO> {
    const [bids, bidCount] = await this._bidsService.findByMarketId(query);

    return {
      bids: bids.map(BidsSerializer.serialize),
      bidCount
    };
  }
}
